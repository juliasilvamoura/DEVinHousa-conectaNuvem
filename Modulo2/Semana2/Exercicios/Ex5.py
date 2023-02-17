new_list = [input("Entre com um valor: ") for i in range(20)]

maior = max(new_list)
maior_pos = new_list.index(maior)
menor = min(new_list)
menor_pos = new_list.index(menor)

print(f"O menor elemento de N é {menor} e a sua posição dentro da lista é {menor_pos}")