import random
from flask import json

mimetype = 'application/json'
url = "/developers/"


def test_devs_success_status_200(client, logged_in_client):
  assert client.get('/developers/', headers={
    "Authorization": f"Bearer {logged_in_client}"
  }).status_code == 200

def test_devs_not_authenticated(client):
  assert client.get('/developers/').status_code == 403

def test_dev_sucess(client, logged_in_client):
    response = client.get('/developers/search_developers', headers={
        "Authorization": f"Bearer {logged_in_client}"
    })
    # assert response.status_code == 200
    assert len(response.json["records"]) ==6