from fastapi import APIRouter

from app.services.quiz_generator import quiz_generator

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz"]
)


@router.post("/start")
async def start_quiz():

    quiz = quiz_generator.generate()

    return quiz