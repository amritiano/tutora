from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str
    DEBUG: bool

    OPENROUTER_API_KEY: str
    MODEL_NAME: str

    CHROMA_DB: str
    COLLECTION_NAME: str

    class Config:
        env_file = ".env"


settings = Settings()