from app.database.chroma import db


class Retriever:

    def retrieve(self, n_results: int = 10):

        results = db.collection.query(
            query_texts=["main concepts"],
            n_results=n_results
        )

        documents = results["documents"][0]

        return "\n\n".join(documents)


retriever = Retriever()