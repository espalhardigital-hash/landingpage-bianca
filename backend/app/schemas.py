from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class LeadCreate(BaseModel):
    email: EmailStr
    source: str = Field(default="hero")
    
    # Campo honeypot oculto. Si se llena, se ignorará/descartará el registro silenciosamente.
    website: Optional[str] = Field(default="", description="Campo honeypot para bots. Debe mantenerse vacío.")

class LeadResponse(BaseModel):
    success: bool
    ebookUrl: Optional[str] = None
    message: str
