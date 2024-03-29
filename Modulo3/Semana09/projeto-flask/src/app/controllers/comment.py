from flask import Blueprint
from flask.wrappers import Response
from src.app import mongo_client
from bson import json_util

comments = Blueprint("comments", __name__,  url_prefix="/comments")

@comments.route("/get_all", methods = ["GET"])
def get_all():
  comments = mongo_client.comments.aggregate([
    {
      "$limit": 5
    }
  ])

  return Response(
    response=json_util.dumps({'records' : comments}),
    status=200,
    mimetype="application/json"
  )