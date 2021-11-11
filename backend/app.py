from flask import Flask
from flask_cors import CORS

from blueprint.auth import auth
from blueprint.expense import expense_blueprint
from blueprint.project import project

app = Flask(__name__)
app.register_blueprint(auth)
app.register_blueprint(expense_blueprint)
app.register_blueprint(project)
app.secret_key = 'supersecretkey'
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
