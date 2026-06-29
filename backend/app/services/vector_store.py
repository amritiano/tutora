from google import genai

from app.config import settings

from app.database.chroma import db


client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


class VectorStore:

    def store(self, chunks):

        ids = []

        documents = []

        embeddings = []

        metadatas = []

        for index, chunk in enumerate(chunks):

            response = client.models.embed_content(

                model="text-embedding-004",

                contents=chunk.page_content

            )

            ids.append(str(index))

            documents.append(chunk.page_content)

            embeddings.append(response.embeddings[0].values)

            metadatas.append({

                "chunk": index

            })

        db.collection.add(

            ids=ids,

            documents=documents,

            embeddings=embeddings,

            metadatas=metadatas

        )


vector_store = VectorStore()