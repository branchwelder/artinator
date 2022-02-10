from flask import Flask, request
from art import *
import json

app = Flask(__name__)
f = open("db.json")
db = json.load(f)
f.close()


@app.post("/add_entry")
def save_entry():
    req = request.get_json()
    db["entries"].append(
        {
            "username": req["username"],
            "text": text2art(req["text"], font="rnd-xlarge")
        }
    )
    json_object = json.dumps(db, indent=4)

    with open("db.json", "w") as outfile:
        outfile.write(json_object)

    return db["entries"][-1]


@app.get("/read_entries")
def read_entries():
    return db
