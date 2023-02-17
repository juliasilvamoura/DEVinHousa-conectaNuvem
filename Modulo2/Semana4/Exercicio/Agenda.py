from Endereco import Endereco
from Pessoa import Pessoa
from Paciente import Paciente
from Medico import Medico

import json

class Agenda:
    def __init__(self,dia: int, mes: int, ano: int, hora: str, observacao: str, crm_medico= None, cpf_paciente = None):
        self.crm_medico = crm_medico
        self.cpf_paciente = cpf_paciente
        self.dia = dia
        self.mes = mes
        self.ano = ano
        self.hora = hora 
        self.observacao = observacao
        self.agendamentos = []

    def exibir_agenda(self):
        for agenda in self.agendamentos:
            print(f"""
            Médico: {agenda["medico"]}
            Paciente: {agenda["paciente"]}
            Data: {agenda["dia"]}/{agenda["mes"]}/{agenda["ano"]}
            Horário: {agenda["horario"]}
            Obs: {agenda["observacao"]}
            """)

    def cadastrar_agenda(self, medico: Medico, paciente: Paciente):
        self.agendamentos.append({"medico": medico.crm, "paciente": paciente.cpf,"dia": self.dia, "mes": self.mes, "ano": self.ano, "horario": self.hora, "observacao": self.observacao})

    def salvar_agenda(self):
        with open('agenda.json', 'w+') as fp:
            json.dump(self.agendamentos, fp)


end = Endereco("Santiago",992,"não tem","Flamengo", "Birgui", "SP")
end.cadastrar_endereco()
pessoa_1 = Pessoa("Julia", 12345, "julia.com.br")
# pessoa_1.cadastrar_pessoa(end)
paciente_1 = Paciente(123, "457.180.448-21",991798774,"tanto faz","14/07/1998")
paciente_1.cadastrar_paciente(pessoa_1, end)

medico_1 = Medico(123,991798774)
medico_1.cadastrar_medico(pessoa_1, end)

agenda_1 = Agenda(1,7,2022,"09:00", "Não esquecer")
agenda_1.cadastrar_agenda(medico_1, paciente_1)
# agenda_1.salvar_agenda()