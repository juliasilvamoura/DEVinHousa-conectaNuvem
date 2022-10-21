class Dev{
    constructor(nome, idade, principalLinguagem){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
    }


    apresentacao(){
        console.log(`Sou Dev, trabalho com ${this.principalLinguagem}, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}


class FrontEndDev extends Dev{
    constructor(nome, idade, principalLinguagem, framework){
        super();
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.framework = framework;
    }
    apresentacao(){
        console.log(`Sou Dev FrontEnd, trabalho com ${this.principalLinguagem}, meu nome é ${this.nome} e tenho ${this.idade} anos, e sou especialista em ${this.framework}`)
    }
}


class BackEndDev extends Dev{
    constructor(nome, idade, principalLinguagem, bancoDeDados){
        super(nome, idade, principalLinguagem);
        this.bancoDeDados = bancoDeDados;
    }

    apresentacao(){
        console.log(`Sou Dev BackEnd, trabalho com ${this.principalLinguagem}, meu nome é ${this.nome} e tenho ${this.idade} anos, e sou especialista em ${this.bancoDeDados}`)
    }
}

const frontend1 = new FrontEndDev("Julia", 23, "JS", "React JS")
const backend1 = new BackEndDev("Julia", 23, "JS", "My SQL");
frontend1.apresentacao();
backend1.apresentacao();