from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    DATABASE_URL: str = Field(
        default="sqlite+aiosqlite:///./lead_magnet.db",
        description="URL de la base de datos (PostgreSQL o SQLite)"
    )
    
    MINIO_ENDPOINT: str = Field(
        default="minio:9000",
        description="Endpoint de MinIO dentro de la red Docker"
    )
    MINIO_ACCESS_KEY: str = Field(
        default="minioadmin",
        description="Access Key de MinIO"
    )
    MINIO_SECRET_KEY: str = Field(
        default="minioadmin",
        description="Secret Key de MinIO"
    )
    MINIO_SECURE: bool = Field(
        default=False,
        description="Indica si MinIO usa HTTPS"
    )
    MINIO_EXTERNAL_ENDPOINT: str = Field(
        default="localhost:9080",
        description="Endpoint externo de MinIO para la descarga de clientes (host)"
    )
    MINIO_BUCKET_NAME: str = Field(
        default="lead-magnets",
        description="Nombre del bucket de MinIO"
    )
    
    RESEND_API_KEY: str = Field(
        default="",
        description="API Key de Resend para enviar correos"
    )
    FROM_EMAIL: str = Field(
        default="onboarding@resend.dev",
        description="Remitente de los correos enviados"
    )
    
    # Secret Key para la generación de tokens de confirmación (puedes usar algo robusto en prod)
    SECRET_KEY: str = Field(
        default="super-secret-genz-token-key-change-in-prod",
        description="Clave secreta para firmar/validar tokens de confirmación"
    )
    
    FRONTEND_URL: str = Field(
        default="http://localhost:3080",
        description="URL del Frontend para redirecciones"
    )
    BACKEND_URL: str = Field(
        default="http://localhost:8080",
        description="URL del Backend para enlaces de confirmación/desuscripción"
    )
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()

