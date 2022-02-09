from flask import Flask
from art import *

app = Flask(__name__)


@app.route("/randart")
def make_randart():
    return {"art": randart()}
