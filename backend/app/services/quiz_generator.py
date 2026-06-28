from app.services.gemini_service import client

from app.prompts.topic_prompt import topic_prompt


def extract_topics(

content:str

):

    prompt = topic_prompt(content)


    response = client.models.generate_content(

        model="gemini-2.5-flash",

        contents=prompt

    )


    return response.text