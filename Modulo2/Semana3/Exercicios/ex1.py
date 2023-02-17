
class ContaBanco:
    def __init__(self, nome_titular, numero, saldo, limite_conta):
        self.nome_titular = nome_titular
        self.numero = numero
        self.saldo = saldo
        self.limite_conta = limite_conta
    
    def extrato(self):
        txt = "Extrato"
        print(f""" 
        {txt.center(20,'-')}
        Titular: {self.nome_titular}
        Saldo: {self.saldo}
        Limite: {self.limite_conta}
        """)

    def deposito(self, valor):
        self.saldo += valor
        txt = "Deposito"
        print(f"""
        {txt.center(20,'-')}
        Titular: {self.nome_titular}
        Saldo: {self.saldo}
        Depositado: {valor}
        """)

    def saque(self,valor):
        self.saldo -= valor
        txt = "Saque"
        print(f"""
        {txt.center(20,'-')}
        Titular: {self.nome_titular}
        Saldo: {self.saldo}
        Saque: {valor}
        """)

    def transferencia(self, conta_recebe, valor):
        txt = "Transferencia"
        if  self.saldo >= valor:
            self.saldo -= valor
            conta_recebe.saldo += valor
            
            print(f"""
            {txt.center(20,'-')}
            Titular: {self.nome_titular}
            Saldo Atual: {self.saldo}
            Valor transferencia: - R${valor}
            """)
            print(f"""
            {txt.center(20,'-')}
            Titular: {conta_recebe.nome_titular}
            Saldo Atual:  {conta_recebe.saldo}
            Valor transferencia: + R${valor}
            """)

        elif self.limite_conta >= valor:
            self.saldo -= valor
            conta_recebe.saldo += valor
            
            print(f"""
            {txt.center(20,'-')}
            Titular: {self.nome_titular}
            Saldo Atual: {self.saldo}
            Valor transferencia: - R${valor}
            """)
            print(f"""
            {txt.center(20,'-')}
            Titular: {conta_recebe.nome_titular}
            Saldo Atual:  {conta_recebe.saldo}
            Valor transferencia: + R${valor}
            """)

        else:
            print("Sem saldo suficiente")

conta = ContaBanco("Julia", 123, 100, 500)
conta_cla = ContaBanco("Claudia", 145, 500, 1000)

while True:
    
    acao = int(input(f"""
    O que deseja fazer:

    1 - Saque
    2 - Depósito
    3 - Transferencia
    4 - Extrato
    ------------
    0 - Sair\n\n
    """))

    if acao == 1:
        valor = int(input("Valor do saque: "))
        conta.saque(valor)
    elif acao == 2:
        valor = int(input("Valor do deposito: "))
        conta.deposito(valor)
    elif acao == 3:
        valor = int(input("Valor do transferencia: "))
        # conta_recebe = input("Quem irá receber: ")
        conta.transferencia(conta_cla, valor)
    elif acao == 4:
        conta.extrato()
    elif acao == 0:
        break



# conta = ContaBanco("Julia", 123, 1000, 500)
# conta_cla = ContaBanco("Claudia", 145,500, 1000)
# conta.extrato()
# conta.deposito(200)
# conta.saque(100)
# conta.transferencia(conta_cla, 100)