from flask import Flask

from blueprint.auth import auth
from blueprint.project import project
from blueprint.expense import expense

app = Flask(__name__)
app.register_blueprint(auth)
app.register_blueprint(expense)
app.register_blueprint(project)
app.secret_key = 'supersecretkey'


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
