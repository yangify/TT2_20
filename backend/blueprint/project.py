from flask import Blueprint

from backend.blueprint.db import Database

project = Blueprint('project', __name__)
db = Database()


@project.route('/projects', methods=['GET'])
def get_projects():
    projects = db.projects
    return {'projects': projects}
