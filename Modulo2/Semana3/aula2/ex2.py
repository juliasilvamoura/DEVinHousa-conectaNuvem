from itertools import count
from random import randint

class vendaPassagem:
    def __init__(self, pessoa):
        self.pessoa = pessoa
        self.__numero = 0
        self.__disponibilidade = False
        self.__poltrona = []
        self.__valor = 100
    
    @property
    def poltrona(self):
        return self.__poltrona  

    @property
    def numero(self):
        return self.__numero

    @property
    def disponibilidade(self):
        return self.__disponibilidade  
    
    @property
    def valor(self):
        return self.__valor

    # @poltrona.setter
    # def poltrona(self)

    def comprarPassagem(self, quantidade):
        valor_compra = self.__valor * quantidade
        while quantidade !=0:
            self.__numero = len(self.__poltrona) +1
            self.__poltrona.append(self.pessoa)
            quantidade -=1
            print(f"Compra realizada, acento {self.__numero}")
        print(f"Valor total: R${valor_compra}")
    
    def cancelarCompra(self, quantidade):
        valor_retorno = self.__valor * quantidade
        while quantidade !=0:
            for i in self.__poltrona:
                if(i == self.pessoa):
                    print(f"acento: {i}")
                    i = False
            quantidade -=1

        print(f"Valor retorno: R${valor_retorno}")


julia = vendaPassagem('Julia')
julia.comprarPassagem(2)
julia.cancelarCompra(1)