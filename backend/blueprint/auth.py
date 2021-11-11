from flask import Blueprint, request, session
from backend.blueprint.db import Database

auth = Blueprint('login', __name__)
db = Database()


@auth.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    for user in db.users:
        if username != user['username']: continue
        if password == user['password']:
            session['user'] = user
            return {'status': True, 'user': user}

    return {'status': False, 'user': None}


@auth.route('/logout', methods=['POST'])
def logout():
    session['user'] = None
    return 'logout!'
