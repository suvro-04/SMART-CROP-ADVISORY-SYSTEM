from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Configuration
API_KEY = os.environ.get("OPENROUTER_API_KEY", "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")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

conversations = {}

class ChatBot:
    def __init__(self, model="anthropic/claude-3.5-sonnet"):
        self.model = model
        self.system_prompt = """
        You are a helpful and intelligent assistant called Friend4U.
        You provide smart, friendly, and fact-based answers.
        Be concise and polite. Use emojis if relevant.
        """

    def get_response(self, user_message, conversation_id=None):
        messages = [{"role": "system", "content": self.system_prompt}]

        if conversation_id and conversation_id in conversations:
            messages.extend(conversations[conversation_id])

        messages.append({"role": "user", "content": user_message})

        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": self.model,
            "messages": messages,
            "temperature": 0.7,
            "max_tokens": 2000
        }

        try:
            response = requests.post(API_URL, headers=headers, json=payload, timeout=45)
            response.raise_for_status()

            try:
                result = response.json()
            except ValueError:
                return {"success": False, "error": "Invalid JSON from API."}

            ai_message = (
                result.get("choices", [{}])[0].get("message", {}).get("content")
                or result.get("choices", [{}])[0].get("text", "")
                or "⚠️ No valid response from model."
            )

            if conversation_id:
                if conversation_id not in conversations:
                    conversations[conversation_id] = []

                conversations[conversation_id].append({"role": "user", "content": user_message})
                conversations[conversation_id].append({"role": "assistant", "content": ai_message})

                if len(conversations[conversation_id]) > 20:
                    conversations[conversation_id] = conversations[conversation_id][-20:]

            return {
                "success": True,
                "response": ai_message,
                "model": self.model,
                "timestamp": datetime.now().isoformat()
            }

        except requests.exceptions.RequestException as e:
            return {"success": False, "error": f"API request failed: {e}"}
        except Exception as e:
            return {"success": False, "error": f"Internal error: {e}"}


bot = ChatBot()

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy", "timestamp": datetime.now().isoformat()})

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json or {}
    if "message" not in data:
        return jsonify({"error": "Message is required"}), 400

    user_message = data["message"]
    conversation_id = data.get("conversation_id", "default")

    result = bot.get_response(user_message, conversation_id)
    status = 200 if result.get("success") else 500
    return jsonify(result), status

@app.route("/clear", methods=["POST"])
def clear_conversation():
    data = request.json or {}
    conversation_id = data.get("conversation_id", "default")
    conversations.pop(conversation_id, None)
    return jsonify({"success": True, "message": "Conversation cleared."})

@app.route("/conversations", methods=["GET"])
def list_conversations():
    return jsonify({
        "conversations": list(conversations.keys()),
        "count": len(conversations),
        "timestamp": datetime.now().isoformat()
    })

if __name__ == "__main__":
    if API_KEY == "your-api-key-here":
        print("⚠️ Please set your OPENROUTER_API_KEY environment variable.")
    print("🚀 Starting Friend4U backend...")
    app.run(debug=True, host="0.0.0.0", port=5000)
