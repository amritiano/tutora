import json

from app.prompts.quiz_prompt import QUIZ_PROMPT
from app.services.retriever import retriever
from app.services.llm import llm


class QuizGenerator:

    def generate(self):

        # Get document context from ChromaDB
        context = retriever.retrieve()

        # Create prompt
        prompt = QUIZ_PROMPT.format(
            context=context
        )

        # Ask the LLM
        response = llm.generate(prompt)

        # Remove markdown if the model returns ```json
        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        try:
            quiz = json.loads(response)

        except Exception:

            quiz = {
                "title": "Quiz",
                "questions": [
                    {
                        "difficulty": "Easy",
                        "concept": "General",
                        "question": response
                    }
                ]
            }

        return quiz


quiz_generator = QuizGenerator()