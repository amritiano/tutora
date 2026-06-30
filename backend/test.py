from google import genai

client = genai.Client(
    api_key="AQ.Ab8RN6KIlV9TZcsFSAoVAvWKH0bJIVC37Uig5ox-pxZ2prahFg"
)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Say Hello"
)

print(response.text)