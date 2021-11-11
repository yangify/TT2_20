from flask import Blueprint

from blueprint.db import Database

project = Blueprint('project', __name__)
db = Database()


@project.route('/projects/<user_id>')
def get_projects(user_id):
    projects = [p for p in db.projects if p['user_id'] == int(user_id)]
    return {'projects': projects}
