vetor = []
for i in range(20):
    valor = input("Entre com um valor: ")
    vetor.append(valor)

maior = max(vetor)
maior_pos = vetor.index(maior)
menor = min(vetor)
menor_pos = vetor.index(menor)

print(f"O menor elemento de N é {menor} e a sua posição dentro da lista é {menor_pos}")
