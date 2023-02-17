import pytest
from src.app import create_app, DB
from src.app import create_app
from src.app.routes import routes
from flask import json
from sqlalchemy import event

mimetype = 'application/json'
headers = {
    'Content-Type': mimetype,
    'Accept': mimetype
}

@pytest.fixture(scope="session")
def app():
    #  Estamos testando no ambiente de teste
  app_on = create_app('development')
  routes(app_on)
  return app_on

@pytest.fixture
def logged_in_client(client):
    data = {
        "email": "luislopes@gmail.com",
        "password": "123Mudar!"
    }
    response = client.post("user/login", data=json.dumps(data), headers=headers)
    return response.json["token"]

# é tipo função e autouse quer dizer que sempre vai ser invocada essa função quando meus testes rodar
@pytest.fixture(scope="function", autouse=True)
def session(app):
    with app.app_context():
        connection = DB.engine.connect() # nova coneção
        transaction = connection.begin() # inicia a conexão, a transaction 
        options = dict(bind=connection, binds={}) # dicionario
        sess = DB.create_scoped_session(options=options) # cria minha session 
        sess.begin_nested()

        @event.listens_for(sess(), 'after_transaction_end')
        def restart_savepoint(sess2, trans):
            if trans.nested and not trans._parent.nested:
                sess2.expire_all()
                sess2.begin_nested()

        DB.session = sess
        #O yield faz parte do protocolo de iteradores do python, ele evita você ter que criar o elemento iterável efetivamente, tornando seu código mais escalável
        yield sess 
        sess.remove()
        transaction.rollback()
        connection.close()