# AI Webpage

A simple AI chat website using **FastAPI, Python and JavaScript**.

## Requirements

* Python 3.14
* Visual Studio Code
* Python extension
* Live Server extension

## Install packages

Open a terminal in the project folder:

```bash
pip install -r requirements.txt
```

## API Keys

You need an API key from one of these providers:

* OpenRouter: https://openrouter.ai
* Groq: https://console.groq.com

Create a `.env` file inside the `backend` folder:

```text
backend
│
├── main.py
└── .env
```

Add your API keys to the `.env` file:

```env
GROQ_API_KEY=your_groq_api_key
OPENROUTER_API_KEY=your_openrouter_api_key
```

## Run Backend

Open terminal:

```bash
cd backend
py -m uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

## Run Frontend

Open `frontend/index.html` in Visual Studio Code.

Right click:

```text
Open with Live Server
```

The website will open in your browser.

## Project Structure

```text
AI-webpage
│
├── backend
│   ├── main.py
│   └── .env
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── requirements.txt
└── README.md
```
