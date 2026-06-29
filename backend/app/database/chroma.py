import chromadb

from app.config import settings


class ChromaDB:

    def __init__(self):

        self.client = chromadb.PersistentClient(
            path=settings.CHROMA_DB
        )

        self.collection = self.client.get_or_create_collection(

            name=settings.COLLECTION_NAME
        )


db = ChromaDB()