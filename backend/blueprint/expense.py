from flask import Blueprint, session, request
from blueprint.db import Database

expense = Blueprint('expense', __name__)
db = Database()


@expense.route('/expenses/<project_id>', methods=['GET'])
@expense.route('/expenses/<project_id>/<expense_id>', methods=['GET'])
def get_expenses(project_id, expense_id=None):
    if 'user' not in session or not session['user']:
        return {'status': False, 'message': 'no user logged in'}

    if not has_project(project_id):
        return {'status': False, 'message': 'project not found'}

    expenses = [e for e in db.expenses if e['project_id'] == int(project_id)]
    if not expense_id: return {'status': True, 'expenses': expenses}

    output = None
    for e in expenses:
        if e['id'] == int(expense_id): output = e
    if not output: return {'status': False, 'message': 'no expense found'}
    return {'status': True, 'expense': output}


def has_project(project_id):
    user_id = session['user']['id']
    for p in db.projects:
        if p['id'] == int(project_id) and p['user_id'] == user_id:
            return True
    return False


# delete expense in project
@expense.route('/expenses/<expense_id>', methods=['DELETE'])
def delete_expense(expense_id):
    if 'user' not in session or not session['user']: return {'status': False, 'message': 'access denied'}

    exp = None
    for e in db.expenses:
        if e['id'] == int(expense_id): exp = e
    if not exp: return {'status': False, 'message': 'expense not found'}

    if not has_project(exp['project_id']): return {'status': False, 'message': 'access denied'}
    db.expenses.remove(exp)
    return {'status': True, 'expense': exp}
