# -*- coding: utf-8 -*-
import sys
import os
import logging

# IMPORTANT: Add project root to sys.path
# This allows absolute imports like `from src.models import ...`
# Do not remove or modify this line !
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, request, jsonify
from flask_cors import CORS

# Import the placeholder RAG handler
from src.utils.rag_handler import get_rag_response

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__, static_folder="static", static_url_path="")

# Enable CORS for all domains on all routes
CORS(app)

# Example route
@app.route("/")
def index():
    app.logger.info("Serving index.html")
    return app.send_static_file("index.html")

# API endpoint for the chat
@app.route("/api/chat", methods=["POST"])
def chat_endpoint():
    app.logger.info("Received request for /api/chat")
    try:
        data = request.get_json()
        if not data or "message" not in data:
            app.logger.warning("Missing 'message' in request body")
            return jsonify({"error": "Missing 'message' in request body"}), 400

        user_message = data["message"]
        session_id = data.get("session_id") # Optional session ID
        app.logger.info(f"User message: {user_message}, Session ID: {session_id}")

        # Call the RAG handler (currently a placeholder)
        app.logger.info("Calling RAG handler...")
        ai_response = get_rag_response(user_message, session_id)
        app.logger.info(f"RAG handler returned: {ai_response}")

        return jsonify({"response": ai_response})

    except Exception as e:
        app.logger.error(f"Error processing chat request: {e}", exc_info=True)
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    # Run the app on 0.0.0.0 to make it accessible externally
    # Use a port like 5001
    app.logger.info("Starting Flask server...")
    # Disable debug mode for cleaner logs during this test, reloader might cause issues
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5001)), debug=False)

