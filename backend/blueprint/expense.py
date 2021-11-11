from flask import Blueprint, request

expense = Blueprint('expense', __name__)

from blueprint.db import Database
db = Database()


#get all expenses in project
@expense.route('/expense/id', methods=['GET'])
def expense():
    project_id = request.args.get('project_id')
    output = []
    for current_expense in db.expenses:
        if project_id == current_expense['project_id']:
            output.append(current_expense)
    if not output:
        return {"found": False, "expenses": []}
    return {"found": True, "expenses": output}

#get specific expenses in project
@expense.route('/expense', methods=['GET'])
def expense():
    expense_id = request.args.get('expense_id')
    output = []
    for current_expense in db.expenses:
        if expense_id== current_expense['id']:
            output = {"found": True, "expense": current_expense}
            return output
    output = {"found": False, "expense": 'expense not found'}
    return output
