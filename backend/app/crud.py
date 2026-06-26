from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models import Lead
from app.schemas import LeadCreate

async def get_lead_by_email(db: AsyncSession, email: str) -> Optional[Lead]:
    query = select(Lead).where(Lead.email == email)
    result = await db.execute(query)
    return result.scalar_one_or_none()

async def create_lead(db: AsyncSession, lead_in: LeadCreate) -> Lead:
    db_lead = Lead(
        email=lead_in.email,
        source=lead_in.source,
        confirmed=False,
        unsubscribed=False
    )
    db.add(db_lead)
    await db.flush() # flush para obtener el ID antes de hacer commit
    return db_lead

async def confirm_lead_by_email(db: AsyncSession, email: str) -> bool:
    db_lead = await get_lead_by_email(db, email)
    if db_lead:
        db_lead.confirmed = True
        return True
    return False

async def unsubscribe_lead_by_email(db: AsyncSession, email: str) -> bool:
    db_lead = await get_lead_by_email(db, email)
    if db_lead:
        db_lead.unsubscribed = True
        return True
    return False
