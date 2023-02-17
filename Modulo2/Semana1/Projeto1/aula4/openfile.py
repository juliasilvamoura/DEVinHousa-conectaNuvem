# open( primeiro paramento caminho do arquivo, atributo se é leitura, escrita e tals)

file = open('numeros.txt', 'r')
lista = file.readlines()
print(lista)


# forma de tirar o \n
with open('numeros.txt') as f:
    mylist = f.read().splitlines()

print(mylist)