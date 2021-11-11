from flask import Flask

from blueprint.expense import expense

app = Flask(__name__)
app.register_blueprint(expense)


@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
