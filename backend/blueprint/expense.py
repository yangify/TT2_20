import json

from flask import Blueprint, session, request
from datetime import datetime
from blueprint.db import Database

expense_blueprint = Blueprint('expense', __name__)
db = Database()


@expense_blueprint.route('/expenses/<project_id>/<user_id>', methods=['GET'])
@expense_blueprint.route('/expenses/<project_id>/<user_id>/<expense_id>', methods=['GET'])
def get_expenses(project_id, user_id, expense_id=None):
    if not has_project(project_id, user_id):
        return {'status': False, 'message': 'project not found'}

    expenses = [e for e in db.expenses if e['project_id'] == int(project_id)]
    if not expense_id: return {'status': True, 'expenses': expenses}

    output = None
    for e in expenses:
        if e['id'] == int(expense_id): output = e
    if not output: return {'status': False, 'message': 'no expense found'}
    return {'status': True, 'expense': output}


@expense_blueprint.route('/expenses/<user_id>', methods=['POST'])
def create_expense(user_id):

    project_id = request.form['project_id']
    expense_name = request.form['expense_name']
    category_id = request.form['category_id']
    expense_description = request.form['expense_description']
    amount = request.form['amount']

    if not has_project(project_id, user_id):
        return {'status': False, 'message': 'project not found'}
    check_exist = None
    for e in db.expenses:
        if e['name'] == expense_name: check_exist = e
    if check_exist: return {'status': False, 'message': 'expense already exists'}
    get_last = db.expenses[-1]
    new_expense_id = get_last + 1
    input = {
        "id": new_expense_id,
        "project_id": int(project_id),
        "category_id": int(category_id),
        "name": expense_name,
        "description": expense_description,
        "amount": int(amount),
        "created_at": datetime.now(),
        "created_by": session['user'],
        "updated_at": datetime.now(),
        "updated_by": session['user']
    }
    db.expenses.append(input)
    for e in db.expenses:
        if e['id'] == new_expense_id: check_exist = e
    if not check_exist: return {'status': False, 'message': 'expense not found'}
    return {'status': True, 'message': 'new expense created'}


@expense_blueprint.route('/expenses/<user_id>', methods=['PUT'])
def update_expenses(user_id):
    new_expense = json.loads(request.data)

    expense = get_expense(new_expense['id'])
    if not expense: return {'status': False, 'message': 'expense not found'}
    if not has_project(expense['project_id'], user_id): return {'status': False, 'message': 'access denied'}

    for key, value in new_expense.items():
        if key not in expense: continue
        expense[key] = value

    return {'status': True, 'expense': expense}


# delete expense in project
@expense_blueprint.route('/expenses/<expense_id>/<user_id>', methods=['DELETE'])
def delete_expense(expense_id, user_id):
    exp = None
    for e in db.expenses:
        if e['id'] == int(expense_id): exp = e
    if not exp: return {'status': False, 'message': 'expense not found'}

    if not has_project(exp['project_id'], user_id): return {'status': False, 'message': 'access denied'}
    db.expenses.remove(exp)
    return {'status': True, 'expense': exp}


def get_expense(expense_id):
    for expense in db.expenses:
        if expense['id'] == expense_id: return expense
    return None


def has_expense(expense, user_id):
    project = get_project(expense['project_id'])
    return project['user_id'] == user_id and expense['project_id'] == project['id']


def has_project(project_id, user_id):
    for p in db.projects:
        if p['id'] == int(project_id) and p['user_id'] == user_id:
            return True
    return False


def get_project(project_id):
    for p in db.projects:
        if p['id'] == project_id: return p
    return None
