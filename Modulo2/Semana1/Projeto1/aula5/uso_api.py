import requests # ele puxa a informação de outro lugar/serviço

data = requests.get('')
print(data.content)

# tem que usar um ambiente virtual, activate, pode startar o da aula 3