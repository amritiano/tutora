from fastapi import FastAPI

from app.api.upload import router as upload_router
from app.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
)

app.include_router(upload_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to Tutora AI"
    }


@app.get("/health")
def health():
    return {
        "status": "running"
    }