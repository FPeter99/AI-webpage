from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# Groq kliens
client = Groq(
    api_key="https://console.groq.com/keys" # get api key from here
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "Backend működik!"
    }


@app.post("/chat")
def chat(data: ChatRequest):

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "Te egy segítőkész AI asszisztens vagy."
            },
            {
                "role": "user",
                "content": data.message
            }
        ]
    )


    return {
        "answer": response.choices[0].message.content
    }