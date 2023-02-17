
print("""Leve em conta as seguintes opções
    [1] Somar
    [2] Subtrair
    [3] Dividir
    [4] Multiplicação
""")
operacao = int(input("Informe operaçao: "))
numeroDigitado1 = int(input("Informe um numero: "))
numeroDigitado2 = int(input("Informe um numero: "))

def somar(a,b):
    return a + b

def subtracao(a,b):
    return a - b

def multiplicacao(a,b):
    return a * b

def divisao(a,b):
    return a/b

if operacao == 1:
    print( somar(numeroDigitado1, numeroDigitado2))
elif operacao ==2:
    print( subtracao(numeroDigitado1, numeroDigitado2))
elif operacao == 3:
    print( multiplicacao(numeroDigitado1, numeroDigitado2))
elif operacao == 4:
    print( divisao(numeroDigitado1, numeroDigitado2))
else: 
    print("Digite um valor correto")

print("Fim da execução")
