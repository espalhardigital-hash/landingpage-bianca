from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase
from app.config import settings

# Crear motor de base de datos asíncrono
engine = create_async_engine(
    settings.DATABASE_URL,
    # Solo aplicamos connect_args de timeout si estamos usando SQLite
    connect_args={"timeout": 30} if settings.DATABASE_URL.startswith("sqlite") else {},
    echo=True, # Echo en True para ver las queries en logs en desarrollo
    future=True
)

# Activar el pragma WAL en SQLite para soportar lecturas/escrituras concurrentes
from sqlalchemy import event
@event.listens_for(engine.sync_engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    if settings.DATABASE_URL.startswith("sqlite"):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA journal_mode=WAL")
        cursor.execute("PRAGMA synchronous=NORMAL")
        cursor.close()

# Creador de sesiones asíncronas
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False
)

# Clase base declarativa para modelos
class Base(DeclarativeBase):
    pass

# Dependencia para inyectar la sesión en las rutas
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
