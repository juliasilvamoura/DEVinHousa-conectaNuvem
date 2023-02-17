
def decorator(f):

    def inverso(palavra, num):
        repita = palavra * num
        # invertida = "alo" 

        return repita
    
    return inverso

@decorator
def funcao(palavra, num):
    return palavra

if __name__ == "__main__":
    teste1 = funcao("ola",2)
    print(teste1)