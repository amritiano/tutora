from fastapi import APIRouter, UploadFile, File

from app.services.file_service import save_uploaded_file
from app.services.document_processor import process_document

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/")
async def upload(file: UploadFile = File(...)):

    saved = await save_uploaded_file(file)

    processed = process_document(saved["path"])

    return {
        "filename": saved["original_name"],
        "characters": processed["characters"],
        "preview": processed["text"][:500]
    }