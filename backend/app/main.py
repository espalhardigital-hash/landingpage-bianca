import base64
import time
from typing import Dict
from fastapi import FastAPI, Depends, HTTPException, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.database import get_db, Base, engine
from app.schemas import LeadCreate, LeadResponse
from app.crud import get_lead_by_email, create_lead, confirm_lead_by_email, unsubscribe_lead_by_email
from app.services.minio_service import minio_service
from app.services.email_service import email_service
from app.services.scheduler import start_email_sequence
import os

app = FastAPI(title="Mente en Calma API", version="1.0.0")

# Asegurar que el directorio static exista
os.makedirs("static", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Configurar CORS para permitir peticiones desde el frontend (puerto 3000 y otros comunes)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Permitir todos para facilitar desarrollo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Diccionario simple en memoria para rate-limiting por IP (10 peticiones/minuto)
# En producción se usaría Redis o un middleware especializado
ip_request_history: Dict[str, list] = {}

@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    client_ip = request.client.host
    # Solo aplicamos rate-limit al endpoint de leads
    if request.url.path == "/api/leads" and request.method == "POST":
        current_time = time.time()
        # Limpiar registros antiguos (>60s)
        if client_ip in ip_request_history:
            ip_request_history[client_ip] = [
                t for t in ip_request_history[client_ip] if current_time - t < 60
            ]
        else:
            ip_request_history[client_ip] = []
            
        # Comprobar límite
        if len(ip_request_history[client_ip]) >= 10:
            raise HTTPException(
                status_code=429,
                detail="Demasiadas peticiones. Por favor, intenta de nuevo en un minuto."
            )
        # Registrar petición
        ip_request_history[client_ip].append(current_time)
        
    response = await call_next(request)
    return response

# Evento de inicio: crear tablas en PostgreSQL
@app.on_event("startup")
async def startup_event():
    async with engine.begin() as conn:
        # Crea las tablas si no existen
        await conn.run_sync(Base.metadata.create_all)
    print("Tablas de base de datos inicializadas correctamente.")

# Funciones auxiliares para el token de confirmación (Base64 seguro para URL)
def generate_confirm_token(email: str) -> str:
    return base64.urlsafe_b64encode(email.encode('utf-8')).decode('utf-8')

def decode_confirm_token(token: str) -> str:
    try:
        return base64.urlsafe_b64decode(token.encode('utf-8')).decode('utf-8')
    except Exception:
        return ""

@app.post("/api/leads", response_model=LeadResponse, status_code=201)
async def register_lead(
    lead_in: LeadCreate, 
    background_tasks: BackgroundTasks, 
    db: AsyncSession = Depends(get_db)
):
    # 1. Protección Honeypot: si el campo 'website' tiene contenido, ignorar silenciosamente
    if lead_in.website and len(lead_in.website.strip()) > 0:
        print(f"[Honeypot] Bloqueado bot silenciosamente que envió email: {lead_in.email}")
        # Retornamos éxito simulado (200 OK) para engañar al bot sin procesar nada
        mock_url = "http://localhost:9000/lead-magnets/guia-ansiedad.pdf"
        return LeadResponse(
            success=True,
            ebookUrl=mock_url,
            message="Revisa tu bandeja de entrada para comenzar."
        )

    # 2. Generar URL firmada de descarga inmediata
    ebook_download_url = minio_service.generate_presigned_download_url()

    # 3. Comprobar si el lead ya existe en la base de datos
    existing_lead = await get_lead_by_email(db, lead_in.email)
    if existing_lead:
        print(f"[Leads] Email {lead_in.email} ya registrado. Devolviendo URL firmada existente.")
        # Retornamos 200 (éxito pero ya registrado, no duplicamos inserción ni envío)
        return LeadResponse(
            success=True,
            ebookUrl=ebook_download_url,
            message="Ya estás registrado/a. Hemos generado tu enlace de descarga."
        )

    # 4. Crear nuevo lead en PostgreSQL
    new_lead = await create_lead(db, lead_in)
    await db.commit()
    await db.refresh(new_lead)
    
    # 5. Generar enlace de confirmación
    token = generate_confirm_token(new_lead.email)
    # Redirigir al endpoint de confirmación del backend
    confirm_link = f"{settings.BACKEND_URL}/api/leads/confirm?token={token}"
    unsubscribe_link = f"{settings.BACKEND_URL}/api/leads/unsubscribe?email={new_lead.email}"

    # 6. Enviar correo de Bienvenida (Día 0) asíncronamente
    background_tasks.add_task(
        email_service.send_email,
        to_email=new_lead.email,
        subject="Tu eBook está listo: Supera la Ansiedad Juvenil",
        template_name="welcome-ebook.html",
        context={
            "ebookUrl": ebook_download_url,
            "confirmUrl": confirm_link,
            "unsubscribeUrl": unsubscribe_link
        }
    )

    # 7. Detonar la secuencia de 7 días en segundo plano
    start_email_sequence(new_lead.email, background_tasks)

    return LeadResponse(
        success=True,
        ebookUrl=ebook_download_url,
        message="¡Registro exitoso! Revisa tu email para activar tu desafío de 7 días."
    )

@app.get("/api/leads/confirm")
async def confirm_lead(token: str, db: AsyncSession = Depends(get_db)):
    """
    Endpoint para confirmar suscripción desde el email.
    Redirecciona a la página de éxito en el frontend.
    """
    email = decode_confirm_token(token)
    if not email:
        raise HTTPException(status_code=400, detail="Token de confirmación inválido o corrupto.")
        
    confirmed = await confirm_lead_by_email(db, email)
    if confirmed:
        print(f"[Leads] Lead {email} confirmado correctamente.")
        # Redirige a la página de agradecimiento/confirmación en el frontend
        return RedirectResponse(url=f"{settings.FRONTEND_URL}/confirmado")
    
    raise HTTPException(status_code=404, detail="Lead no encontrado.")

@app.get("/api/leads/unsubscribe")
async def unsubscribe_lead(email: str, db: AsyncSession = Depends(get_db)):
    """
    Endpoint para cancelar la suscripción de emails.
    Redirecciona a la página de desuscripción en el frontend.
    """
    unsubscribed = await unsubscribe_lead_by_email(db, email)
    if unsubscribed:
        print(f"[Leads] Lead {email} desuscrito de la secuencia.")
        return RedirectResponse(url=f"{settings.FRONTEND_URL}/desuscrito")
        
    raise HTTPException(status_code=404, detail="Lead no encontrado.")
