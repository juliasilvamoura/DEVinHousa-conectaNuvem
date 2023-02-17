from datetime import date


class BombaCombustivel:
    def __init__(self, tipoCombustivel, valorLitro, quantidadeCombustivel, data =0) -> None:
        self.tipoCombustivel =tipoCombustivel
        self.valorLitro = valorLitro
        self.quantidadeCombustivel = quantidadeCombustivel
        self.data = data
    
    def abastecerPorValor(self, valor):
        quantidade = round((valor/self.valorLitro),2)
        self.quantidadeCombustivel -= quantidade
        print(f"Quantidade: {quantidade} Litros de {self.tipoCombustivel}")
    
    def abastecerPorLitro(self, quantidade):
        valor = round((quantidade * self.valorLitro),2)
        self.quantidadeCombustivel -= quantidade
        print(f"Valor: R$ {valor}")

    def alterarValor(self, novoValor):
        self.data = date.today()
        self.valorLitro = novoValor
    
    def alterarCombustivel(self, novoCombustibel):
        self.tipoCombustivel = novoCombustibel

    def alterarQuantidadeCombustivel(self, novaQuantidade):
        self.quantidadeCombustivel += novaQuantidade
    
    def dataUltimoAumento(self):
        print(f"Ultimo aumento {self.data}")
        return self.data


alcool = BombaCombustivel("alcool", 5, 10000)
gasolina = BombaCombustivel("gasolina", 6.95, 20000)

gasolina.abastecerPorValor(20)
gasolina.alterarValor(7.13)
gasolina.dataUltimoAumento()
gasolina.abastecerPorLitro(4.30)
gasolina.abastecerPorValor(20)