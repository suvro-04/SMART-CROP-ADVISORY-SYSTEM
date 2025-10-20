from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
import json
import sqlite3
import re
import openai  # You can replace this with Gemini if you prefer

# ------------------ CONFIG ------------------
API_KEY = "sk-your-api-key"  # replace with your actual key
openai.api_key = API_KEY

app = FastAPI(title="Smart Crop Intelligent API", version="2.0")

# ------------------ DATA ------------------
with open("data.json", "r") as f:
    crop_data = json.load(f)

# ------------------ DATABASE ------------------
def init_db():
    conn = sqlite3.connect("memory.db")
    c = conn.cursor()
    c.execute("""
    CREATE TABLE IF NOT EXISTS memory (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT,
        answer TEXT
    )
    """)
    conn.commit()
    conn.close()

init_db()

def save_to_memory(q, a):
    conn = sqlite3.connect("memory.db")
    c = conn.cursor()
    c.execute("INSERT INTO memory (question, answer) VALUES (?, ?)", (q, a))
    conn.commit()
    conn.close()

def search_memory(q):
    conn = sqlite3.connect("memory.db")
    c = conn.cursor()
    c.execute("SELECT answer FROM memory WHERE question LIKE ?", ('%' + q + '%',))
    row = c.fetchone()
    conn.close()
    return row[0] if row else None

# ------------------ CORE LOGIC ------------------
def find_from_json(question: str):
    """Try to find an answer from JSON data"""
    question = question.lower()

    for crop, details in crop_data.items():
        if crop.lower() in question:
            if "temperature" in question:
                return f"The ideal temperature for {crop} is {details['ideal_temperature']}."
            elif "soil" in question:
                return f"{crop} grows best in {details['soil_type']}."
            elif "water" in question:
                return f"{crop} requires {details['water_requirement']} water."
            elif "rain" in question or "rainfall" in question:
                return f"{crop} needs {details['rainfall_requirement']} rainfall."
            elif "duration" in question or "time" in question:
                return f"{crop} takes around {details['growth_duration']} to grow."
            else:
                return {crop: details}
    return None


def is_casual_message(text: str):
    casual_keywords = ["hi", "hello", "hey", "how are you", "good morning", "good evening"]
    return any(word in text.lower() for word in casual_keywords)


def get_ai_response(prompt: str):
    """Fallback to external AI API if not found locally"""
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # or "gpt-4" if available
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150,
            temperature=0.7
        )
        return response.choices[0].message["content"].strip()
    except Exception as e:
        return f"AI service error: {str(e)}"

# ------------------ ROUTES ------------------
@app.get("/")
def home():
    return {"message": "Welcome to Smart Crop Intelligent API 🚜"}

@app.get("/ask")
def ask(q: str = Query(..., description="Ask your question")):
    # Check in DB memory first
    memory_answer = search_memory(q)
    if memory_answer:
        return JSONResponse(content={"source": "memory", "answer": memory_answer})

    # Casual response
    if is_casual_message(q):
        return JSONResponse(content={"source": "casual", "answer": "Hello! 👋 How can I help you with crops or farming today?"})

    # Try to answer from JSON data
    json_answer = find_from_json(q)
    if json_answer:
        save_to_memory(q, str(json_answer))
        return JSONResponse(content={"source": "json", "answer": json_answer})

    # If not found, use AI model
    ai_answer = get_ai_response(q)
    save_to_memory(q, ai_answer)
    return JSONResponse(content={"source": "ai", "answer": ai_answer})
