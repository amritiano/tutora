from app.database.chroma import db


class Retriever:

    def retrieve(self):

        results = db.collection.get()

        documents = results.get("documents", [])

        return "\n\n".join(documents)


retriever = Retriever()