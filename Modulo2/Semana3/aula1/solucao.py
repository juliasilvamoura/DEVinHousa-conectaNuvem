from random import randint

class Garcom:
    def __init__(self, nome):
        self.nome =nome

class Pedido:
    def __init__(self, cod, mesa, valor, nome_cliente, nome_garcom):
        self.cod = cod
        self.mesa =mesa
        self.valor = valor
        self.nome_cliente = nome_cliente
        self.nome_garcom = nome_garcom

class Cliente:
    def __init__(self, nome, mesa = 1, valor_gasto = 0):
        self.nome = nome
        self.mesa = mesa
        self.valor_gasto = valor_gasto
    
    def somaValor(self, valor):
        self.valor_gasto += valor

class Pizza:
    def __init__(self, tamanho, preco, sabor = 'Calabresa'):
        self.tamanho = tamanho
        self.sabor = sabor
        self.preco = preco

p1 = Pizza('P', 30.00)
p2 = Pizza('M', 60.00)
p3 = Pizza('G', 80.00)

pedidos = []
garcom =Garcom('Julia')
cliente = Cliente('Larissa')

while True:
    pizzaPedido = int(input(f"""
    Realizar pedido para o cliente {cliente.nome} de mesa {cliente.mesa}:

    1 - Pissa P
    2 - Pizza M
    3 - Pizza G
    ------------
    0 - Sair\n\n
    """))
    if pizzaPedido == 0:
        break
    preco = 0
    if pizzaPedido == 1:
        preco = p1.preco
    elif pizzaPedido == 2:
        preco = p2.preco
    elif pizzaPedido == 3:
        preco = p3.preco
    
    cliente.somaValor(preco)
    pedidos.append(
        Pedido(randint(0,100), cliente.mesa, preco, cliente.nome, garcom.nome)
        )

print(f'Cliente: {cliente.nome} gastou: {cliente.valor_gasto}')