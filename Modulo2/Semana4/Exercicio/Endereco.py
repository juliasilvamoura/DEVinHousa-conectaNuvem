# from copyreg import pickle
from os.path import dirname, abspath, join
import json

root_path = dirname(abspath(__file__))
dados_path = join(root_path, "data")

class Endereco:
    def __init__(self, lograudoro: str, numero: int, complemento: str, bairro: str, cidade: str, uf: str):
        self.lograudoro = lograudoro
        self.numero = numero
        self.complemento = complemento
        self.bairro = bairro
        self.cidade = cidade
        self.uf = uf
        self.enderecos = []
    
    def exibir_endereco(self):
        for endereco in self.enderecos:
            print(f"""
            Rua: {endereco["lograudoro"]}
            Num: {endereco["numero"]}
            Bairro: {endereco["bairro"]}
            Complemento: {endereco["complemento"]}
            Cidade/UF: {endereco["cidade"]}/{endereco["uf"]}
            """)

    def cadastrar_endereco(self):
        self.enderecos.append({"lograudoro": self.lograudoro, "numero": self.numero, "bairro":self.bairro, "complemento":self.complemento, "cidade": self.cidade, "uf":self.uf})

    def salvar_endereco(self):
        with open('endereco.json', 'w+') as fp:
            json.dump(self.enderecos, fp)

end = Endereco("Santiago",992,"não tem","Flamengo", "Birgui", "SP")
end.cadastrar_endereco()
# end.exibir_endereco()
# end.salvar_endereco()