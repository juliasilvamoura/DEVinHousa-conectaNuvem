class Veiculo{
    constructor(tipoVeiculo, marca, modelo, ano, placa, numMultas, velocidadeMaxima){
        this.tipoVeiculo = tipoVeiculo;
        this.marca=marca;
        this.modelo = modelo;
        this.ano=ano;
        this.placa=placa;
        this.numMultas = numMultas;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    imprimir(){
        console.log(`${this.modelo}`)
    }
    
    adicionaMulta(placa){
        if(this.placa != placa) return console.log("Error")
        else return console.log(this.numMultas += 1);
        
    }
   
}

var carro = new Veiculo("carro","toyota","Corola", "2022","FZU1050", 1, "200")
carro.imprimir();
carro.adicionaMulta("FZU1050");
carro.adicionaMulta("FZU1050");