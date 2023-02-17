# from locale import currency
from bcb import currency
import matplotlib.pyplot as plt # renomeei o pacote para plt

# ipca = sgs.get(('IPCA', 433), last=12) # importar dados
moedas = currency.get(['USD'], start='2021-06-07', end='2022-06-08', side='ask')

plt.plot(moedas)
plt.show() # mostrar o grafico