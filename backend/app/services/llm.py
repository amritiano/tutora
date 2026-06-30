from openai import OpenAI

from app.config import settings

client = OpenAI(
    api_key=settings.OPENROUTER_API_KEY,
    base_url="https://openrouter.ai/api/v1"
)


class LLM:

    def generate(self, prompt: str):

        response = client.chat.completions.create(
            model=settings.MODEL_NAME,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.7
        )

        return response.choices[0].message.content


llm = LLM()