# import pickle
import json
#   USEI PARA CRIAR O DATA.JSON
# chaves = dict.fromkeys(["primeiro_nome", "segundo_nome","idade"])
# with open('data.txt', 'wb') as fp:
#     pickle.dump(chaves, fp)

#  ABRINDO O DATA.JSON E EDITANDO ELE
# json_file= open('data.txt')
# data = json.load(json_file)


chaves = dict.fromkeys(["primeiro_nome", "segundo_nome","idade"])
json_list = json.dumps(chaves) #transforma o meu dicionario em json (tipo str)
# data = json.loads(json_list)
# print(data)


P_nome = input("Primeiro nome: ")
S_nome = input("Segunfo nome: ")
idade = int(input("idade: "))


def editar(P_nome: str, S_nome: str, idade: int):
    data = json.loads(json_list)
    data['primeiro_nome'] = P_nome
    data['segundo_nome'] = S_nome
    data['idade'] = idade
    return data


def criar_json(data: dict):
    json_novo = json.dumps(data)
    print(json_novo)


data = editar(P_nome, S_nome, idade)
criar_json(data)
