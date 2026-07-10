from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
from supabase import create_client
import os


load_dotenv()


app = FastAPI()


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)



# Supabase
supabase = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)



# Groq
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)



class ChatRequest(BaseModel):
    message: str



class LoginRequest(BaseModel):
    email: str
    password: str



@app.get("/")
def home():
    return {
        "message": "Backend működik!"
    }



@app.get("/test-supabase")
def test_supabase():

    response = supabase.table("ai_bots").select("*").execute()

    return response.data



@app.post("/login")
def login(data: LoginRequest):

    try:

        response = supabase.auth.sign_in_with_password(
            {
                "email": data.email,
                "password": data.password
            }
        )


        return {
            "success": True,
            "user": {
                "id": response.user.id,
                "email": response.user.email
            },
            "session": response.session.access_token
        }


    except Exception as e:

        return {
            "success": False,
            "error": str(e)
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


class RegisterRequest(BaseModel):
    email: str
    password: str
    username: str



@app.post("/register")
def register(data: RegisterRequest):

    try:

        response = supabase.auth.sign_up(
            {
                "email": data.email,
                "password": data.password,

                "options": {
                    "data": {
                        "username": data.username
                    }
                }
            }
        )


        return {
            "success": True,
            "message": "Ellenőrizd az emaileidet!"
        }


    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }