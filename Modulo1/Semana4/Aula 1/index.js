class Cachorro{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }

    latir(){
        console.log(`Meu nome é ${this.nome} e minha raca é ${this.raca}.`);
    }
}

var rex = new Cachorro("Pipoca","Vira lata").latir();
console.log(rex)