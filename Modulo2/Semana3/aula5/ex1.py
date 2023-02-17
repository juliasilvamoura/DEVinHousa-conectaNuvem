class Divisao:
    def __init__(self, numerador, denominador = 1):
        self.numerador = numerador
        self.__denominador = denominador

    # @property
    # def numerador(self):
    #     return self.__numerador
    
    @property
    def denominador(self):
        return self.__denominador
    
    # @numerador.setter
    # def numerador(self, numerador):
    #     self.__numerador = numerador

    @denominador.setter
    def denominador(self, denominador):
        if denominador != 0:
            self.__denominador = denominador
        else:
            print("Divisão invalida")
    
    def calcular(self):
        resultado = self.numerador / self.__denominador
        print(f'Resultado: {resultado}')

divisao = Divisao(25)
divisao.denominador = 5
divisao.calcular()