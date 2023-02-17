class Calculadora:

    def __init__(self,a,b):
        self.a = a
        self.b = b


    def somar(a,b):
        return a + b

    def mult(a,b):
        return a * b

    def sub(a,b):
        return a - b

    def div(a,b):
        if(b ==0): return None
        return a / b


# conta = Calculadora(5,5)
# print(conta.somar())
# print(conta.sub())
# print(conta.mult())