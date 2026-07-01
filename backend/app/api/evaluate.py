from fastapi import APIRouter

from app.schemas.evaluation import EvaluationRequest
from app.services.evaluator import evaluator


router = APIRouter(
    prefix="/evaluate",
    tags=["Evaluation"]
)


@router.post("/")
async def evaluate(data: EvaluationRequest):

    return evaluator.evaluate(
        concept=data.concept,
        answer=data.answer
    )