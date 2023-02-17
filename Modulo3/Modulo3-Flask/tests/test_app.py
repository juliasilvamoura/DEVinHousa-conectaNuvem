# confere o nome da pasta src + da aplicação (no caso app tem o __init__.py que tem a instacia)
def test_app_is_created(app):
  """
    Nome
  """
  assert app.name == "src.app"

def test_app_not_is_name_failed(app):
  assert app.name != "src.julia"

#  Vê na config que o DEBUG é falso no de teste e True no de development
def test_config_is_loaded(config):
  assert config['DEBUG'] is True

# Está chamando a rota "/" e espera que não exista error 404
def test_request_returns_404(client):
  assert client.get('/').status_code == 404

def test_request_returns_200(client):
  assert client.post('/user/auth/google').status_code == 200