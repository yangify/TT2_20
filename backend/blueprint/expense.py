from flask import Blueprint

expense = Blueprint('expense', __name__)


@expense.route('/expense')
def hello_world():
    return 'Hello expense!'
