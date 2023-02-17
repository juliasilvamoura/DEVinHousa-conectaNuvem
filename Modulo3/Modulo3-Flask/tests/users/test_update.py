from flask import json

mimetype = 'application/json'
url = "/user/update"

def test_update_not_authorized(client):
  headers = {
    'Content-Type': mimetype,
    'Accept': mimetype
  }
  
  response = client.put(url, headers=headers)
  assert response.status_code == 404


def test_update_authorized_update_id(client, logged_in_client):
  headers = {
    'Content-Type': mimetype,
    'Accept': mimetype,
    'Authorization': f"Bearer {logged_in_client}"
  }
  data = {
    "id": 1000
  }
  response = client.put(url, data=json.dumps(data), headers=headers)
  assert response.status_code == 400
  assert response.json["error"] == "Não é possível alterar este campo"


def test_update_exist_user(client, logged_in_client):
  headers = {
    'Content-Type': mimetype,
    'Accept': mimetype,
    'Authorization': f"Bearer {logged_in_client}"
  }
  data = {
    "name": "Jorge"
  }
  response = client.put(url, data=json.dumps(data), headers=headers)
  assert response.status_code == 204
  
def test_update__not_found_user(client, logged_in_client):
  headers = {
    'Content-Type': mimetype,
    'Accept': mimetype,
    'Authorization': f"Bearer {logged_in_client}"
  }
  data = {
    "name": "Jorge"
  }
  response = client.put(url, data=json.dumps(data), headers=headers)
  assert response.status_code == 404
  assert response.json["error"] == "404 Not Found: The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again."


# quer alterar email por um que já ta cadastrado no banco em outro usuário
def test_update_change_email_failed_same_outher_email(client, logged_in_client):
  headers = {
    'Content-Type': mimetype,
    'Accept': mimetype,
    'Authorization': f"Bearer {logged_in_client}"
  }
  data = {
    "email": "corinta.lima@example.com"
  }
  response = client.put(url, data=json.dumps(data), headers=headers)
  assert response.status_code == 403
  assert response.json["error"] == "Você não pode alterar o e-mail"


def test_update_body_empty(client, logged_in_client):
  headers = {
    'Content-Type': mimetype,
    'Accept': mimetype,
    'Authorization': f"Bearer {logged_in_client}"
  }
  data = {}
  response = client.put(url, data=json.dumps(data), headers=headers)
  assert response.status_code == 400
  assert response.json["error"] == "Não foi enviado nenhum dado para fazer alteração"