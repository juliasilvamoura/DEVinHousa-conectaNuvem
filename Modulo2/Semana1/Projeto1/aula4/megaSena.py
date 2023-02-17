# from random import randint

from random import randint

# sorteio = list(sample(range(1, 61), 6))

sequencia = 1
jogo=[]
valores_corretos = []

def geraNumeros():
    qtd = 6
   
    valor_sorteado = []
    while len(valor_sorteado) < qtd:
        valor = randint(1,60)
        valor_sorteado.append(valor)
        # valor_sorteado = set(valor_sorteado)
    return valor_sorteado
        
# np.random.randint(1, 60,(1,6))
valor_sorteado = geraNumeros()

while sequencia <= 6:
    # for i in range(0,5):
    #     lista = int(input(f"Tentativa {sequencia} - Informe um numero: "))
    chute = int(input(f"Tentativa {sequencia} - Informe um numero: "))

    jogo.append(chute)
    
    sequencia += 1


# print(valor_sorteado)
# intersecção
valores_corretos = set(valor_sorteado) & set(jogo)
print(valor_sorteado)

if(len(valores_corretos)==6):
    print("Você ganhou")
    print(len(valores_corretos))
else: 
    print("Perdeu")
    print(set(valores_corretos))


