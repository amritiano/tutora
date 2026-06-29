from pathlib import Path

from app.services.pdf_loader import extract_pdf_text


def process_document(path: Path):

    extension = path.suffix.lower()

    if extension == ".pdf":

        text = extract_pdf_text(path)

        return {
            "text": text,
            "characters": len(text)
        }

    raise ValueError("Unsupported file.")