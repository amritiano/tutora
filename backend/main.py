from fastapi import FastAPI

from app.config import settings

from app.api.upload import router as upload_router
from app.api.quiz import router as quiz_router

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0"
)

app.include_router(upload_router)
app.include_router(quiz_router)


@app.get("/")
def root():
    return {
        "message": "Tutora Backend Running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }