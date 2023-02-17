
def decorator(f):

    def inverso(palavra):
        invertida = palavra[::-1]
        # invertida = "alo" 

        return invertida
    
    return inverso

@decorator
def funcao(palavra):
    return palavra

if __name__ == "__main__":
    teste1 = funcao("ola")
    print(teste1)