import Endereco from './Endereco';

class Cliente{
    constructor(nome, cpf, endereco, celular){
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.celular=celular;

    }

    //Getter
    // get nome(){return this.nome;}
    // get cpf(){return this.cpf;}
    // get endereco(){return this.endereco;}
    // get celular(){return this.celular;}

  validaCPF(){
      //var soma = 0;
      var resto = 0;
      var i = 0;
      var result;
      
    //cpf = cpf.replace('-',''); // Tirar caracteres especiais
    if(this.cpf == '' ||
        this.cpf.length != 11 ||
        this.cpf == "00000000000" || 
		this.cpf == "11111111111" || 
		this.cpf == "22222222222" || 
		this.cpf == "33333333333" || 
		this.cpf == "44444444444" || 
		this.cpf == "55555555555" || 
		this.cpf == "66666666666" || 
		this.cpf == "77777777777" || 
		this.cpf == "88888888888" || 
		this.cpf == "99999999999"){
            result = false;
        } else{

        var soma = 0 ;
        // validando primeiro digito
        for(i=0; i<9; i++){
            soma+= Number(this.cpf.charAt(i)) * (10-i);
        }
        resto = (soma*10) % 11;
        
        if(resto ==10) resto = 0;
        if(resto !=  Number(this.cpf.charAt(9))) result = false;


        else{

        // validando segundo digito
        soma =0;
        for(i=0; i<10; i++){
            soma+= Number(this.cpf.charAt(i)) * (11-i);
        }
        resto = (soma*10) % 11;
        
        if((resto == 10)) resto = 0;
        if(resto !=  Number(this.cpf.charAt(10))) result = false;
        else result = true;
        } 
    }

        if(result == true){
            console.log('CPF valido');
        } else if(result ==  false){
            console.log('CPF invalido')
        }
}


}

module.exports = Cliente

var julia = new Cliente("Julia", "45718044821", "Santiago Troncoso", "991798774")
julia.validaCPF();