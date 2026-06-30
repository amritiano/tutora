from app.database.chroma import db


class VectorStore:

    def store(self, chunks):

        ids = []
        documents = []
        metadatas = []

        for index, chunk in enumerate(chunks):

            ids.append(str(index))

            documents.append(chunk.page_content)

            metadatas.append({
                "chunk": index
            })

        db.collection.add(
            ids=ids,
            documents=documents,
            metadatas=metadatas
        )


vector_store = VectorStore()