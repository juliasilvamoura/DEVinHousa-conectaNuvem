from flask import Blueprint

technology = Blueprint('technology', __name__, url_prefix="/technology") 

@technology.route("/tech", methods=['GET'])
def list_all_technologies():
    return {"data": ["Java", "Javascript", "Python"]}

@technology.route("/", methods=['POST'])
def add_new_technology():
    return {"data": ["Java", "Javascript", "Python"]}
