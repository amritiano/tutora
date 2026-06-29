from pathlib import Path

from app.services.pdf_loader import extract_pdf_text

from app.services.chunker import Chunker

from app.services.vector_store import vector_store


chunker = Chunker()


def process_document(path: Path):

    text = extract_pdf_text(path)

    chunks = chunker.split(text)

    vector_store.store(chunks)

    return {

        "characters": len(text),

        "chunks": len(chunks)

    }