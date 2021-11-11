from flask import Blueprint, session

from backend.blueprint.db import Database

project = Blueprint('project', __name__)
db = Database()


@project.route('/projects', methods=['GET'])
def get_projects():
    if 'user' not in session or not session['user']: return {'status': False, 'message': 'no user logged in'}
    user_id = session['user']['id']
    projects = [p for p in db.projects if p['id'] == user_id]
    return {'projects': projects}
