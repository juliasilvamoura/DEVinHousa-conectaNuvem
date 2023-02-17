
class CompanhiaAerea:
    def __init__(self, num, origem, destino, valorPass, assentos=200):
        self.num = num
        self.origem = origem
        self.destino = destino
        self.assentos = assentos
        self.valorPass = valorPass
    
    def reservaAssento(self):
        codigo = 0
        if self.assentos > 190:
            cobranca = self.valorPass - (self.valorPass*0.25)
            codigo += 1
            self.assentos -= 1
        elif self.assentos > 185 and self.assentos <= 190:
            cobranca = self.valorPass - (self.valorPass*0.15)
            codigo += 1
            self.assentos -= 1
        elif self.assentos > 180 and self.assentos <= 185:
            cobranca = self.valorPass - (self.valorPass*0.05)
            codigo += 1
            self.assentos -= 1
        elif self.assentos > 0 and self.assentos < 185:
            cobranca = self.valorPass
            codigo += 1
            self.assentos -= 1
        else: 
            print("Não há mais assentos disponiveis")
        
        print(f"O valor da passagem é R${cobranca} e o código da reserva é: {codigo}")
        print(f"Sobraram {self.assentos} assentos")
    


vooBRISP = CompanhiaAerea("007","Birigui", "São Paulo",200)
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()
vooBRISP.reservaAssento()