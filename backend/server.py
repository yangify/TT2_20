from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__, template_folder='../frontend', static_folder='../frontend')

app.config['TRAP_HTTP_EXCEPTIONS'] = True


@app.route("/")
def hello():
  return render_template("index.html")

@app.route("/techtrek/testing", methods=['GET'])
def test():  
  return jsonify("test string")


@app.route("/techtrek/login", methods=['POST'])
def get_keygroups():
  return jsonify({"body": "output"})

@app.route("/techtrek/function1", methods=['POST'])
def get_keygroups():
  return jsonify({"body": "output"})

@app.route("/techtrek/function2", methods=['POST'])
def get_keygroups():
  return jsonify({"body": "output"})

if __name__ == "__main__":
  app.run()