frase1 = input("Digite uma frase: ")
frase2 = input("Digite uma frase: ")
frase3 = input("Digite uma frase: ")

primeiroEterceiro = frase1 + " " + " " + frase3

print(f"Tamanho frase 1: {len(frase1)} ===== Tamanho frase 2: {len(frase2)} Tamanho frase 3: {len(frase3)} \n{4* frase1}  ======= {2* frase2}  ======== {3* frase3} \n{frase1 in primeiroEterceiro} \n{frase3 in primeiroEterceiro} \n{primeiroEterceiro[0]} \n{frase3[2]}")

# OU

print()
in_var3 = "sim" if frase1 in primeiroEterceiro else "Não"
print(in_var3)

if frase1 in primeiroEterceiro:
    print("SIM")