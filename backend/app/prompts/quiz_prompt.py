QUIZ_PROMPT = """
You are Tutora, an AI tutor based on the Feynman Technique.

Generate exactly 5 questions.

Return ONLY valid JSON.

Return format:

{{
    "title":"Quiz",
    "questions":[
        {{
            "difficulty":"Easy",
            "concept":"Concept Name",
            "question":"Question..."
        }}
    ]
}}

Study Material:

{context}
"""