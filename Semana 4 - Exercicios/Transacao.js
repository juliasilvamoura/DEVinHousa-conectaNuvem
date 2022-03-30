class Transacao{
    idTransferencia = 0
    data
    constructor(conta, saldoConta){
        this.conta = conta;
        this.saldoConta = saldoConta;
    }

    idDaTransacao(){
        this.idTransferencia++
    }

    getIdTransacao(){
        return this.idTransferencia;
    }

    getData(){
        return this.data
    }

    setData(){
        var dia = new Date().getDate()
        var mes = new Date().getMonth() + 1
        var ano = new Date().getFullYear()
        var hora = new Date().getHours()
        var minuto = new Date().getMinutes()
        var segundos = new Date().getSeconds()

        this.data = `${dia}/${mes}/${ano} as ${hora}:${minuto}:${segundos}`
    }

    transferir(valor,contaDestino){

        if(valor <= this.saldoConta){
            this.saldoConta -= valor;
            this.idDaTransacao();
            this.setData()
            console.log("----------------------------Transferencia----------------------------------------")
            console.log(`Pix ${valor} realizado, saldo ${this.saldoConta}`)
            console.log(`Id da transação ${this.getIdTransacao()} e conta de Destino ${this.contaDestino}`)
            console.log(`A transação foi realizada: ${this.getData()}`)
            console.log("--------------------------------------------------------------------")
        }else console.log("Saldo Insuficiete")
        
        
    }

    depositar(valor){
        this.saldoConta += valor;
        console.log(`Depósito PIX ${valor} realizado, saldo ${this.saldoConta}`)
    }

    imprimirExtrato(){
        console.log(`Saldo da Conta R$ ${this.saldoConta}`)
    }
}

const aux = new Transacao(14215,500);
aux.depositar(200)
aux.transferir(50,1425)
aux.imprimirExtrato()
aux.transferir(10,1425)