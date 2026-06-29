from pathlib import Path
import shutil
import uuid

from fastapi import UploadFile, HTTPException

UPLOAD_DIR = Path("storage/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

ALLOWED_FILES = {
    ".pdf",
    ".txt",
    ".docx"
}


async def save_uploaded_file(file: UploadFile):

    extension = Path(file.filename).suffix.lower()

    if extension not in ALLOWED_FILES:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type."
        )

    unique_name = f"{uuid.uuid4()}{extension}"

    destination = UPLOAD_DIR / unique_name

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "original_name": file.filename,
        "stored_name": unique_name,
        "path": destination
    }