from bcb import sgs
import matplotlib.pyplot as plt # renomeei o pacote para plt
from random import randint, seed, randrange, \
    choice, shuffle, sample, random

ipca = sgs.get(('IPCA', 433), last=12) # importar dados
# print(ipca)
x = sample(range(1,30),10)
y = sample(range(25,100),10)

plt.plot(ipca)
plt.show() # mostrar o grafico