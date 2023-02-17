from random import choice
import os

# print(os.name) # retorna nt - retorna o sistema que estou e o comando para limpar o terminal

def cls():
    os.system('cls' if os.name=='nt' else 'clear') # função de limpar

file = open('nomes.txt', 'r')
lista = file.readlines()
file.close()

palavra = choice(lista).split('\n')[0].lower()

lista_traco = []
lista_letras = []
lista_erro = []
tentativas = []
acertos = 0

for i in range(len(palavra)):
    lista_letras.append(palavra[i])
    lista_traco.append('_')


while True:
    cls()
    if acertos == len(lista_letras):
        print('Parabéns Voce ganhou')
        print(f'A palavra é \"{palavra}"')
        break
    
    print(lista_traco)

    print('Tentativa:' + str(tentativas))
    print('Erros: ' + str(lista_erro))


    #add o codigo aqui

    letra= input("Informe uma letra para tentar de novo:")
    tentativas.append(letra)

    c = lista_letras.count(letra)
    if c > 0:
        print(f'Você acertou a letra {letra}')
        _index = 0
        for i in range(0,c):
            _index = lista_letras.index(letra, _index)
            lista_traco[_index] = letra
            _index+=1
            acertos+=1
        continue
    print(f'A letra {letra} não está presente na palavra')
    lista_erro.append(letra)

    if len(lista_erro) == 10:
        print('Você perdeu')
        break