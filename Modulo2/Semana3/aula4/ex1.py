from random import randint
import random

class Pessoa:
    def __init__(self, nome, idade):
        self.nome =nome
        self.idade = idade

    def mostraIdade(self):
        print(f"{self.nome} tem {self.idade} anos")
    
    @classmethod
    def criarPeloAno(cls, nome, ano_nascimento):
        return cls(nome, 2022 - ano_nascimento)


class Aluno(Pessoa):
    def __init__(self, nome, idade, aprovado, curso = "Engenharia", nota = randint(1,10)):
        self.nome = nome
        self.idade = idade
        self.nota = nota
        self.aprovado = aprovado
        self.curso = curso
    
    def nota(self, nota):
        self.nota = nota
        print(f"Você cadastrou a nota {self.nota} para o aluno {self.nome}")

    def aprovado(self):
        if self.nota >= 7:
            self.aprovado = True
            print(f"O aluno {self.nome} foi aprovado")
        elif self.nota < 7:
            self.aprovado = False
            print(f"O aluno {self.nome} foi reprovado")
    
    def recebeDiploma(self):
        if self.nota >= 7:
            print("Recebe o Diploma")
    
    def cursoMatriculado(self):
        print(f"Está matriculado no curso {self.curso}")

lista = []   
nome = randint(0,30)
lista.append(nome)
lista_idade = [random.randint(20,40)]
alunos = []