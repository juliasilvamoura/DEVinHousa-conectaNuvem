from os.path import dirname, abspath, join
import json

root_path = dirname(abspath(__file__))
dados_path = join(root_path, "data")



class ArquivoException(FileNotFoundError):

    def validar(arquivo):
        try:
            medicos = dict()
            agendamentos = dict()
            pacientes = dict()
            with open(join(dados_path,"medicos.json"), "r") as med:
                medicos = json.load(med)
            with open(join(dados_path,"paciente.json"), "r") as pac:
                pacientes = json.load(pac)
            with open(join(dados_path,"agenda.json"), "r") as agenda:
                agendamentos = json.load(agenda)
        except FileNotFoundError as exception:
            print(f"Aquivo no existe | {exception}")
