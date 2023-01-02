from flask import Flask, request

app = Flask(__name__)

@app.route("/game/<gameid>/", methods= ["POST"])
def game(gameid):
    move = request.form
    