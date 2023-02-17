# def somar(a, b):
#     return a + b

# def mult(a, b):
#     return a * b

# def div(a, b):
#     return a / b

# def sub(a, b):
#     return a - b

# importa classe
from calculadora import Calculadora

# importa a função
# from calculadora import sub
# from calculadora import mult
# from calculadora import div

# importa tudo
# import calculadora *

# importa calculadora e usa calculadora.somar
# import calculadora 

import os.path
import matplotlib
# import numby 

def mostraMenu():        
    operacao = int(input("""Leve em conta as seguintes opções
        [1] Somar
        [2] Subtrair
        [3] Dividir
        [4] Multiplicação
    """))

    a = int(input('Informe um número (1): \n'))
    b = int(input('Informe um número (2): '))

    if operacao == 1:
        result=Calculadora.somar(a,b)
        print(result)
    elif operacao == 2:
        result=Calculadora.sub(a,b)
        print(result)
    elif operacao == 3:
        result=Calculadora.div(a,b)
        print(result)
    elif operacao == 4:
        result=Calculadora.mult(a,b)
        print(result)
    else:
        print('não é operação válida')

while True:
    mostraMenu()
    continua = int(input("Continuar com outra operação? [1 - Sim | 2 - Não)"))
    if continua != 1:
        break

# input()
