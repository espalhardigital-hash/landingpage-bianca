import time
import asyncio
from app.services.email_service import email_service
from app.database import AsyncSessionLocal
from app.crud import get_lead_by_email

def send_sequence_email_sync(email: str, day: int, delay_seconds: int):
    """
    Función síncrona que corre de forma segura en un hilo secundario del pool de FastAPI.
    Usa time.sleep sin bloquear el event loop principal.
    """
    print(f"[Secuencia] Esperando {delay_seconds} segundos para enviar Día {day} a {email}...")
    time.sleep(delay_seconds)
    
    async def check_and_send():
        async with AsyncSessionLocal() as db:
            lead = await get_lead_by_email(db, email)
            if not lead:
                print(f"[Secuencia] Lead {email} no encontrado. Cancelando Día {day}.")
                return
            if lead.unsubscribed:
                print(f"[Secuencia] Lead {email} se ha desuscrito. Cancelando Día {day}.")
                return
                
            subject = f"Desafío Día {day}: Superando la Ansiedad Juvenil"
            template_name = f"challenge-day-{day}.html"
            unsubscribe_url = f"http://localhost:8080/api/leads/unsubscribe?email={email}"
            
            await email_service.send_email(
                to_email=email,
                subject=subject,
                template_name=template_name,
                context={
                    "email": email,
                    "day": day,
                    "unsubscribeUrl": unsubscribe_url
                }
            )
            print(f"[Secuencia] Email Día {day} enviado a {email} [OK]")

    # Ejecutar la corrutina en el hilo actual usando asyncio.run
    asyncio.run(check_and_send())

def start_email_sequence(email: str, background_tasks):
    """
    Encola los 7 días de la secuencia utilizando el objeto background_tasks de FastAPI.
    """
    day_multiplier = 15 # 15 segundos equivale a 1 día para desarrollo/pruebas rápidas
    for day in range(1, 8):
        delay = day * day_multiplier
        # Registrar cada envío como una tarea independiente en el pool
        background_tasks.add_task(send_sequence_email_sync, email, day, delay)
        
    print(f"[Secuencia] 7 días programados en BackgroundTasks para {email}.")
