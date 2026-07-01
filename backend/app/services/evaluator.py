import json

from app.prompts.evaluation_prompt import EVALUATION_PROMPT
from app.services.llm import llm
from app.services.progress import progress_analyzer


class Evaluator:

    def evaluate(self, concept: str, answer: str):

        # Create evaluation prompt
        prompt = EVALUATION_PROMPT.format(
            concept=concept,
            answer=answer
        )

        # Get AI response
        response = llm.generate(prompt)

        # Remove markdown formatting if present
        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        try:
            # Parse JSON
            result = json.loads(response)

            # Add learning analytics
            result = progress_analyzer.analyze(result)

            return result

        except json.JSONDecodeError:

            # Fallback response
            return {
                "score": 0,
                "grade": "F",
                "knowledge_level": "Needs Improvement",
                "understanding": "Unknown",
                "strengths": [],
                "missing_concepts": [],
                "feedback": response
            }


evaluator = Evaluator()