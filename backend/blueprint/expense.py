from flask import Blueprint, session

from backend.blueprint.db import Database

expense = Blueprint('expense', __name__)
db = Database()


@expense.route('/expense', methods=['GET'])
def get_expense():
    return session['user']
