# tupla é um elemento e a virgula, ela é imutavel e pode tem elementos de tipos diferentes (não recomendavel)

# tupla = (10,)
 
from collections import namedtuple
from random import randint, random


Estados = namedtuple('Estados',['sigla','nome'])
estado_rj = Estados('rj','Rio de Janeiro')
# estado_rj[0] = 'sp' #da erro pq não pode mudar a tupla
# print(estado_rj[0])

for item in range(0,5):
    print(randint(0,10))