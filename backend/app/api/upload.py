from fastapi import APIRouter, UploadFile, File

from app.services.file_service import save_uploaded_file
from app.services.document_processor import process_document

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/")
async def upload(file: UploadFile = File(...)):
    # Save uploaded file
    saved = await save_uploaded_file(file)

    # Process the document
    processed = process_document(saved["path"])

    # Return response
    return {
        "filename": saved["original_name"],
        "characters": processed["characters"],
        "chunks": processed["chunks"],
        "message": "Stored in ChromaDB successfully"
    }