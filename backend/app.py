from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows React to connect

# Fake user database (replace with real database later)
users = {
    "test": "1234"
}

#Check app.jsx to see how everything works together
#This is an example how to combine both backend and frontend
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Check if user exists and password matches
    if email in users and users[email] == password:
        return jsonify({"success": True, "message": "Login successful!"})
    else:
        return jsonify({"success": False, "message": "Invalid credentials"}), 401


if __name__ == '__main__':
    app.run(debug=True, port=5000)