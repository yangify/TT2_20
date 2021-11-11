from flask import Blueprint

auth = Blueprint('login', __name__)


@auth.route('/login')
def hello_world():
    return 'login!'


@auth.route('/logout')
def hello_world():
    return 'logout!'
