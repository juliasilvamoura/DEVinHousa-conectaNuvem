from random import choice

file = open('notas.txt', 'r')
lista = file.readlines()
file.close()

nome = choice(lista).split('\n')[0].lower()
nota = choice(lista).split('\n')[1].lower()

print(nome)
print(nota)