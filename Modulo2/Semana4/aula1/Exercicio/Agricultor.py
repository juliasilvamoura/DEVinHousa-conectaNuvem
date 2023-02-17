class Agricultor:
    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = idade
        self.__ferramenta = None
    
    @property
    def nome(self):
        return self.__nome
    
    @property
    def idade(self):
        return self.__idade
    
    @property
    def ferramenta(self):
        return self.__ferramenta
    
    @ferramenta.setter
    def ferramenta(self, ferramenta):
        self.__ferramenta = ferramenta


class Ferramenta:
    def __init__(self, tipo):
        self.__tipo = tipo

    @property
    def tipo_ferramenta(self):
        return self.__tipo
    
    def usando_ferramenta(self):
        print(f'Ferramenta {self.__tipo} está sendo usada!')

agricultor_1 = Agricultor('Breno', 20)

enxada = Ferramenta('Enxada')

agricultor_1.ferramenta = enxada

agricultor_1.ferramenta.usando_ferramenta()
