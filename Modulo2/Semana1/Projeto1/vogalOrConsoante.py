
from pickle import TRUE



while TRUE:
    entrada = input("Digite uma letra: ").lower()

    if(entrada == "o"):
        break
    elif(entrada == "a" or entrada == "e" or entrada == "i" or entrada == "o" or entrada == "u"):
        print("É uma vogal")
    else:
        print("É uma consoante")
