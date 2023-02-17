from Endereco import Endereco
from Pessoa import Pessoa

import json

class Medico:
    def __init__(self, crm: int, telefone_secundario: int):
        self.crm = crm
        self.telefone_secundario =telefone_secundario
        self.medicos = []

    def exibir_medico(self):
        for medico in self.medicos:
            print(f"""
            Médico: {medico["nome"]}
            CRM: {medico["crm"]}
            Telefone: {medico["telefone_secundario"]}
            """)

    def cadastrar_medico(self, pessoa: Pessoa):
        self.medicos.append({"nome": pessoa.nome, "crm":self.crm, "telefone_secundario": self.telefone_secundario})
            

    def salvar_medico(self):
        with open('medico.json', 'w+') as fp:

            json.dump(self.medicos, fp)

end = Endereco("Santiago",992,"não tem","Flamengo", "Birgui", "SP")
end.cadastrar_endereco()
pessoa_1 = Pessoa("Julia", 12345, "julia.com.br")
# pessoa_1.cadastrar_pessoa(end)
medico_1 = Medico(123,991798774)
medico_1.cadastrar_medico(pessoa_1)
# medico_1.salvar_medico()