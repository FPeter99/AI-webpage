# AI Webpage

A simple AI chat website using **FastAPI, Python and JavaScript**.

## Requirements

* Python 3.14
* Visual Studio Code
* Python extension
* Live Server extension

## Install packages

Open terminal:

```bash
pip install -r requirements.txt
```

## API Keys

You need an API key from one of these providers:

* OpenRouter: https://openrouter.ai
* Groq: https://console.groq.com

Add your API key in the backend code.

## Run Backend

Open terminal:

```bash
cd backend
py -m uvicorn main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

API docs:

```
http://127.0.0.1:8000/docs
```

## Run Frontend

Open `frontend/index.html` in Visual Studio Code.

Right click:

```
Open with Live Server
```

The website will open in your browser.

## Project Structure

```
AI-webpage
│
├── backend
│   └── main.py
│
└── frontend
    ├── index.html
    ├── style.css
    └── script.js
```
