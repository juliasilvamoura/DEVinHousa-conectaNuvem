from Cliente import Cliente 
from Pizza import Pizza
from Garcom import Garcom  

class Pedido:
    def __init__(self, cod, valor, nome_cliente, nome_garcom):
        self.cod = cod
        self.valor = valor
        self.nome_cliente = nome_cliente
        self.nome_garcom = nome_garcom
    


tamanho_pizza = input("""Escolha um tamanho de Pizza:
        [P] Pesquena
        [M] Média
        [G] Grande
    """)

sabor_pizza = input("Qual o sabor? ")
cliente = input("informe seu nome: ")
mesa = input("informe sua mesa: ")
garcom = input("Garçom: ")

if tamanho_pizza.upper() == "P":
    valor = 30.00
    pizza = Pizza(tamanho_pizza,valor,sabor_pizza)
elif tamanho_pizza.upper() == "M":
    valor = 60.00
    pizza = Pizza(tamanho_pizza,valor,sabor_pizza)
elif tamanho_pizza.upper() == "G":
    valor = 80.00
    pizza = Pizza(tamanho_pizza,valor,sabor_pizza)

cliente = Cliente(cliente, mesa)

pedido = Pedido(1, valor, cliente, garcom)