class Endereco{
    constructor(logradouro, numero, cidade, estado, pais, cep){
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado,
        this.pais = pais;
        this.cep = cep;
    }

    //Getter
    getLogradouro(){return this.logradouro;}
    getNumero(){return this.numero;}
    getCidade(){return this.cidade;}
    getEstado(){return this.estado;}
    getPais(){return this.pais;}
    getCep(){return this.cep;}
}

module.exports = Endereco