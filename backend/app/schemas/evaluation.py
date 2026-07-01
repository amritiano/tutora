from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    concept: str
    answer: str