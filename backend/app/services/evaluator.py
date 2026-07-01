import json

from app.prompts.evaluation_prompt import EVALUATION_PROMPT
from app.services.llm import llm


class Evaluator:

    def evaluate(self, concept: str, answer: str):

        prompt = EVALUATION_PROMPT.format(
            concept=concept,
            answer=answer
        )

        response = llm.generate(prompt)

        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        try:
            return json.loads(response)

        except Exception:

            return {
                "score": 0,
                "understanding": "Unknown",
                "strengths": [],
                "missing_concepts": [],
                "feedback": response
            }


evaluator = Evaluator()