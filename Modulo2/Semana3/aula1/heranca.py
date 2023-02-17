
class Funcionario:
    def __init__(self, salario = 0, contrato = True):
        self.salario = salario
        self.contrato = contrato
    
    def setSalario(self,valor):
        self.salario = valor
        print(f"Salario: {self.salario}")

    def aumentarSalario(self, porcentagem):
        if self.contrato == False:
            print("O usuário foi demitido")
            return
        self.salario += self.salario * (porcentagem/100)
        print(f"Salario: {self.salario}")
    
    def demitir(self):
        self.contrato = False
        print("Demitido")
    
class Desenvolvedor(Funcionario):
    def __init__(self, salario, contrato=True):
        super().__init__(salario, contrato)

class Designer(Funcionario):
    def __init__(self, salario, contrato=True):
        super().__init__(salario, contrato)

class GerenteMarketing(Funcionario):
    def __init__(self, salario, contrato=True):
        super().__init__(salario, contrato)

julia = Desenvolvedor(5000)
julia.setSalario(10000)
julia.aumentarSalario(30)
julia.demitir()
julia.aumentarSalario(50)