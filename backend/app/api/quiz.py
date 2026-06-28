from fastapi import APIRouter

from app.schemas.topic_schema import TopicRequest

from app.services.topic_service import extract_topics


router = APIRouter(

prefix="/api/topics",

tags=["Topics"]

)


@router.post("/")

def get_topics(

request:TopicRequest

):

    result = extract_topics(

        request.content

    )


    return {

        "success":True,

        "data":result

    }