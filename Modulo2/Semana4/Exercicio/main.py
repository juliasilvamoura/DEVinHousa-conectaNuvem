from os.path import dirname, abspath, join
import json
from ArquivoException import ArquivoException
import time

root_path = dirname(abspath(__file__))
dados_path = join(root_path, "data")

medicos = dict()
agendamentos = dict()
pacientes = dict()

with open(join(dados_path,"medico.json"), "r") as med:
    medicos = json.load(med)
with open(join(dados_path,"paciente.json"), "r") as pac:
    pacientes = json.load(pac)
with open(join(dados_path,"agenda.json"), "r") as agenda:
    agendamentos = json.load(agenda)

def execution_time(f):
    
    def tempo_execusao(inicio, fim):
        tempo = fim - inicio
        return tempo
    return tempo_execusao

@execution_time
def calcular_execusao(inicio, fim):
    return fim
# def validar():
#     try:
#         with open(join(dados_path,"medico.json"), "r") as med:
#             medicos = json.load(med)
#         with open(join(dados_path,"paciente.json"), "r") as pac:
#             pacientes = json.load(pac)
#         with open(join(dados_path,"agenda.json"), "r") as agenda:
#             agendamentos = json.load(agenda)
#     except FileNotFoundError as exception:
#         print(f"Aquivo não existe | {exception}")

while True:
    start = time.time()
    print("Médico".center(40,"-"))
    print("1. Cadastrar Médico".ljust(40))
    print("2. Exibir Médicos".ljust(40))
    print("Paciente".center(40,"-"))
    print("3. Cadastrar Paciente".ljust(40))
    print("4. Exibir Paciente".ljust(40))
    print("Agenda".center(40,"-"))
    print("5. Cadastrar Agenda".ljust(40))
    print("6. Exibir Agenda".ljust(40))

    op = input("O que deseja realizar: ")
    
    if op.isnumeric():
        match op:
            case "1":
                nome = input("Nome: ")
                crm = input("CRM: ")
                telefone_secundario = input("Telefone secundário: ")

                medicos[len(medicos)+1]= {"nome": nome, "crm": crm, "telefone_secundario": telefone_secundario}

                with open(join(dados_path,"medico.json"), "w") as med:
                    json.dump(medicos, med)
            
            case "2":
                # with open(join(dados_path,"medico.json"), "r") as med: 
                #     medicos = json.load(med)
                    

                    for medico in medicos:
                        print(f"""
                        Médico: {medico["nome"]}
                        CRM: {medico["crm"]}
                        Telefone: {medico["telefone_secundario"]}
                        """)
            case "3":
                nome = input("Nome: ")
                rg = input("RG: ")
                cpf = input("CPF: ")
                nascimento = input("Data de nascimento: ")
                convenio = input("Convenio: ")

                pacientes[len(pacientes)+1]= {"nome": nome, "nascimento": nascimento, "rg": rg, "cpf": cpf, "convenio":convenio}

                with open(join(dados_path,"paciente.json"), "w") as pac:
                    json.dump(pacientes, pac)
            
            case "4":
                # with open(join(dados_path,"paciente.json"), "r") as pac:
                #     pacientes = json.load(pac)

                    for paciente in pacientes:
                        print(f"""
                        Nome Paciente: {paciente["nome"]}
                        Nascimento: {paciente["nascimento"]}
                        RG: {paciente["rg"]}
                        CPF: {paciente["cpf"]}
                        """)

            case "5":
                medico = input("CRM medico: ")
                paciente = input("CPF paciente: ")
                dia = input("Dia: ")
                mes = input("Mes: ")
                ano = input("Ano: ")
                horario = input("Horário: ")
                obs = input("Observacao: ")

                agendamentos[len(agendamentos)+1]= {"medico": medico, "paciente": paciente, "dia": dia, "mes": mes, "ano":ano, "horario": horario, "observacao": obs}

                with open(join(dados_path,"agenda.json"), "w") as pac:
                    json.dump(agendamentos, pac)
            
            case "6":

                    for agenda in agendamentos:
                        print(f"""
                        Médico: {agenda["medico"]}
                        Paciente: {agenda["paciente"]}
                        Data: {agenda["dia"]}/{agenda["mes"]}/{agenda["ano"]}
                        Horário: {agenda["horario"]}
                        Obs: {agenda["observacao"]}
                        """)
            case "0":
                end = time.time()
                # print(end-start)
                temp = calcular_execusao(start, end)
                print(temp)
                break
                