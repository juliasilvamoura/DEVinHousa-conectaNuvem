class Cachorro:
    def __init__(self, nome):
        self.nome = nome

c1 = Cachorro("Buzzy")

print(c1.nome) # deve retornar Buzzy

print('{0} - {1}'.format(c1.nome, c1.cor))