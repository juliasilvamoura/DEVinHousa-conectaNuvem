from os.path import dirname, abspath, join

#dirname é igual o cd .. (retornando uma pasta)
# join é junção 

# criar o role de abrir lista
from os.path import dirname, abspath, join

root_path = dirname(dirname(abspath(__file__)))
dados_path = join(root_path, "dados.txt")
print(root_path) # caminho até onde o arquivo está
print(dados_path) # nome do meu arquivo
# abspath como se fosse o copy path

dados = open(dados_path).readlines()

print(dados)

def reader(path:str):
    names = (name.split(";")[2] for name in open(path).readlines())
    return names