numeroDigitado1 = int(input("Informe um numero: "))
numeroDigitado2 = int(input("Informe um numero: "))



def maiorNum(a,b):
    if a > b:
        return a 
    elif b > a:
        return b
    else:
        print("São vamores iguais")

print(maiorNum(numeroDigitado1,numeroDigitado2))