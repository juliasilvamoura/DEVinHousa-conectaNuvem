class Pessoa:
    def __init__(self, pessoa, comissao):
        self.pessoa = pessoa
        self.comissao =comissao

    def calcularComissaoVendas(self, vendas):
        self.comissao = vendas * 0.1
        print(f"Sua comissão é {self.comissao}")
    

class vendedorPJ(Pessoa):
    def __init__(self, pessoa, comissao):
        super().__init__(pessoa, comissao)

    def calcularComissaoVendas(self, vendas):
        self.comissao = vendas * 0.18
        print(f"Sua comissão é {self.comissao}")
        

class vendedorCLT(Pessoa):
    def __init__(self, pessoa, comissao):
        super().__init__(pessoa, comissao)

    def calcularComissaoVendas(self, vendas):
        self.comissao = vendas * 0.03 + 1100
        print(f"Sua comissão é {self.comissao}")

clt = vendedorCLT().calcularComissaoVendas(100)    
pj = vendedorPJ().calcularComissaoVendas(100)     