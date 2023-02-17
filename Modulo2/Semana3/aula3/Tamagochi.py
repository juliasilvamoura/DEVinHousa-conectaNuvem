class Tamagochi:
    def __init__(self, nome, idade, fome = 1, saude = 5) -> None:
        self.nome = nome
        self.idade = idade
        self.fome = fome
        self.saude =saude

    def alterarNome(self, novoNome):
        self.nome = novoNome
        self.fome += 0.5
        self.saude -= 0.5
    
    def darComida(self):
        self.fome -= 0.5
        self.saude -= 0.5
    
    def retornarNome(self):
        self.fome += 0.5
        self.saude -= 0.5
        print(self.nome)
        return self.nome

    def retornarIdade(self):
        self.fome += 0.5
        self.saude -= 0.5
        print(self.idade)
        return self.idade
    
    def retornarSaude(self):
        self.fome += 0.5
        self.saude -= 0.5
        print(self.saude)
        return self.saude    

    def retornarFome(self):
        self.fome += 0.5
        self.saude -= 0.5
        print(self.fome)
        return self.fome

    # def __le__(self):


meu_Tamagochi = Tamagochi('Julia', 23)

while True:
    iteracao = 0
    acao = int(input(f"""
    O que deseja fazer:

    1 - Alterar nome
    2 - Dar comida
    3 - retornar nome
    4 - retornar idade
    5 - retornar fome
    6 - retornar saude
    ------------
    0 - Sair\n\n
    """))

    if acao == 1:
        valor = int(input("Novo nome: "))
        iteracao +=1
        meu_Tamagochi.alterarNome(valor)
    elif acao == 2:
        iteracao +=0
        meu_Tamagochi.darComida()
    elif acao == 3:
        iteracao +=1
        meu_Tamagochi.retornarNome()
    elif acao == 4:
        iteracao +=1
        meu_Tamagochi.retornarIdade()
    elif acao == 5:
        iteracao +=1
        meu_Tamagochi.retornarFome()
    elif acao == 6:
        iteracao +=1
        meu_Tamagochi.retornarSaude()
    elif acao == 0:
        break

    if(meu_Tamagochi.saude <= 1):
        if(iteracao<=3):
            print("Morreu de saude")
            break
    
    if(meu_Tamagochi.fome >= 4):
        if(iteracao<=3):
            print("Morreu de fome")
            break