from Pessoa import Pessoa
from Endereco import Endereco

import json


class Paciente:
    def __init__(self, rg: int, cpf: str, telefone:int, convenio: str, data_de_nascimento: str):
        self.rg = rg
        self.cpf = cpf
        self.telefone = telefone
        self.convenio = convenio
        self.data_de_nascimento = data_de_nascimento
        self.pacientes = []
    
    def exibir_paciente(self):
        for paciente in self.pacientes:
            print(f"""
            Nome Paciente: {paciente["nome"]}
            Nascimento: {paciente["nascimento"]}
            RG: {paciente["rg"]}
            CPF: {paciente["cpf"]}
            """)

    def cadastrar_paciente(self, pessoa: Pessoa):
        self.pacientes.append({"nome": pessoa.nome, "nascimento":self.data_de_nascimento, "rg": self.rg, "cpf": self.cpf, "convenio": self.convenio})

    def salvar_paciente(self):
        with open('paciente.json', 'w+') as fp:
            json.dump(self.pacientes, fp)

end = Endereco("Santiago",992,"não tem","Flamengo", "Birgui", "SP")
end.cadastrar_endereco()
pessoa_1 = Pessoa("Julia", 12345, "julia.com.br")
# pessoa_1.cadastrar_pessoa(end)
paciente_1 = Paciente(123, "457.180.448-21",991798774,"tanto faz","14/07/1998")
paciente_1.cadastrar_paciente(pessoa_1)
paciente_1.salvar_paciente()