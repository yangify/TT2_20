from flask import Blueprint

from backend.blueprint.db import Database

project = Blueprint('project', __name__)
db = Database()


@project.route('/projects/user_id', methods=['GET'])
def get_projects(user_id):
    projects = [p for p in db.projects if p['user_id'] == user_id]
    return {'projects': projects}
