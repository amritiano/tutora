class QuizGenerator:

    def generate(self):

        return {
            "title": "AI Generated Quiz",
            "questions": [
                "What is the main topic of the uploaded document?",
                "Explain the first important concept in your own words.",
                "Can you give a real-world example of this concept?",
                "What are the advantages and disadvantages?",
                "Summarize the document as if you were teaching Nova."
            ]
        }


quiz_generator = QuizGenerator()