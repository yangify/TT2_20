from flask import Blueprint, jsonify, request
import json

from db import Database

auth = Blueprint('login', __name__)

database = Database()
@auth.route('/login')
def login():
    jsdata = request.get_json()
    output = authenticate(jsdata)
    output = json.dumps(output, default=str)
    return jsonify({"body": output})
  
def authenticate(logindata):
    getusers = database.users()
    for user in getusers:
        if logindata['username'] == user['username'] and logindata['password'] == user['password']:
            output = {
                "logged": True,
                "user": user["username"]
            }
            return output
    output = {
        "logged": False,
        "output": "Username/Password is wrong"
    }
    return output


@auth.route('/logout')
def hello_world():
    return 'logout!'
