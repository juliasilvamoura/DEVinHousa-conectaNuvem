# array = []
# arrayobg: [] = [{}]  # array de objetos

#  Você pode combinar uma lista com diversos tipod de variaveis (numerica, boolean, string )
# from email.policy import default
# from http.client import SWITCHING_PROTOCOLS


lista = [5,6,4,3]

print(min(lista)) # retorna menor item da lista
print(max(lista)) # retorna maior item da lista
print(len(lista)) # quantidade de itens
print(sum(lista)) # retorna a soma dos itens da lista

numeros = [1,2,3]

numeros.insert(2,7) # insere na posição informada (posição, item a ser inserido)
numeros.append(9) # insere ao final da lista
numeros.pop() # remove o ultimo item da lista ou pop(posição) e ele remore o elemento na posição informada
numeros.remove(7) # remove o elemento especifico, ele remove apenas o primeiro que encontrar os demais itens de mesmo valor permanece

# pesquisa


# switch case 

# switch () {
#     case 1:
#         return
#     default:
#         return
# }

# ternario 
x = 2

print('deu certo') if x == 2 else print('deu errado')

# for

for i in numeros:
    print(i)

# fro com range

for i in numeros(range(0,2)):
    print(i)

while True:
    palavra = input("palavra: ")

    if palavra.lower() == 'sair':
        break
    if len(palavra)<2:
        print('palavra pequena')
        continue # ele retorna de volta ao inicio do while

    print("para sair digite 'sair' ")

def definePar(x):
    if x % 2 ==0:
        print("é par")
        return # ele já da return e finaliza senão ele continua pra proxima linha, melhor que ficar usando vários else
    print("é impar")


# CLASSES E METODOS

