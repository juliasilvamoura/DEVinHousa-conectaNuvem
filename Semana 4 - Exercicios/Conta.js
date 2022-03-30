class Conta{
    constructor(numConta, saldo, cliente = new Cliente){
        this.numConta = numConta;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    get numConta(){return this.numConta;}
    get saldo(){return this.saldo}
    get cliente(){return this.cliente}
}

module.exports = Conta