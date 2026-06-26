import os
from jinja2 import Environment, FileSystemLoader, select_autoescape
import resend
from app.config import settings

class EmailService:
    def __init__(self):
        # Configurar Resend API client
        if settings.RESEND_API_KEY:
            resend.api_key = settings.RESEND_API_KEY
        
        # Configurar Jinja2 para las plantillas de correo
        # Las plantillas se encuentran en /backend/templates/emails
        base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        templates_dir = os.path.join(base_dir, "templates", "emails")
        
        # Asegurar que el directorio de plantillas exista
        os.makedirs(templates_dir, exist_ok=True)
        
        self.jinja_env = Environment(
            loader=FileSystemLoader(templates_dir),
            autoescape=select_autoescape(['html', 'xml'])
        )

    def render_email(self, template_name: str, context: dict) -> str:
        """
        Renderiza una plantilla Jinja2 con el contexto dado.
        """
        try:
            template = self.jinja_env.get_template(template_name)
            return template.render(**context)
        except Exception as e:
            # Plantilla fallback muy simple en caso de que no exista
            print(f"Error al cargar la plantilla {template_name}: {e}")
            return f"<h1>Hola!</h1><p>Aquí tienes tu enlace: {context.get('ebookUrl', '')}</p>"

    async def send_email(self, to_email: str, subject: str, template_name: str, context: dict) -> bool:
        """
        Envia un correo utilizando Resend. En desarrollo local sin API Key,
        se simula el envío y se loguea el HTML en consola.
        """
        html_content = self.render_email(template_name, context)
        
        if not settings.RESEND_API_KEY:
            print("\n" + "="*50)
            print(f"SIMULACIÓN DE ENVÍO DE EMAIL (Sin RESEND_API_KEY)")
            print(f"Para: {to_email}")
            print(f"Asunto: {subject}")
            print(f"Plantilla: {template_name}")
            print("Cuerpo renderizado (primeras 500 caractres):")
            print(html_content[:500] + "...")
            print("="*50 + "\n")
            return True
            
        try:
            params = {
                "from": settings.FROM_EMAIL,
                "to": to_email,
                "subject": subject,
                "html": html_content
            }
            resend.Emails.send(params)
            print(f"Correo enviado exitosamente con Resend a {to_email}!")
            return True
        except Exception as e:
            print(f"Error al enviar correo con Resend a {to_email}: {e}")
            return False

email_service = EmailService()
