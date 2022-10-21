//encapsulamento 

class Pessoa{
    #nome
    #idade // deixa privado
    constructor(nome,idade){
        this.#nome = nome;
        this.#idade = idade
    }

    get nome(){
        return this.#nome;
    }

    exibir(){
        return this.#nome;
    }
}

var julia = new Pessoa("Julia", 23)
console.log(julia.nome)