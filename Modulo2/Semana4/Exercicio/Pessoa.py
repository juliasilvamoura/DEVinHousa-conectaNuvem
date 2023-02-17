from Endereco import Endereco
import json

class Pessoa:
    def __init__(self, nome: str, celular: int, email: str):
        self.nome = nome
        self.celular = celular
        self.email = email
        self.pessoas =[]
    
    def exibir_pessoa(self):
        for pessoa in self.pessoas:
            print(f"""
            Nome: {pessoa["nome"]}
            Celular: {pessoa["celular"]}
            Email: {pessoa["email"]}
            Endereço: {pessoa["endereco"]}
            """)

    def cadastrar_pessoa(self, endereco: Endereco):
        self.pessoas.append({"nome": self.nome, "celular": self.celular, "email": self.email, "endereco": endereco.enderecos})
        

    def salvar_pessoa(self):
        with open('pessoa.json', 'w+') as fp:
            json.dump(self.pessoas, fp)

end = Endereco("Santiago",992,"não tem","Flamengo", "Birgui", "SP")
end.cadastrar_endereco()
pessoa_1 = Pessoa("Julia", 12345, "julia.com.br")
pessoa_1.cadastrar_pessoa(end)
# pessoa_1.salvar_pessoa()
# pessoa_1.exibir_pessoa()