const readLine = require('readline-sync')

let sair = '';

while(sair != 'sair'){

let altura = parseFloat(readLine.question('Sua altura: '));
let peso = parseFloat(readLine.question('Seu peso: '));

let imc = parseFloat(peso / (altura **2)).toFixed(2)

console.log(imc)


    if(imc < 18.5) console.log('Baixo Peso')

    else if(18.5 <= imc <= 24.9)console.log('Peso Normal')

    else if(25<= imc <= 29.9)console.log('Sobrepeso')
        
    else if(30 <= imc <= 34.9)console.log('Obesidade Grau I')
        
    else if(35 <= imc <= 39.9)console.log('Obesidade Grau II')
        
    else if(imc >= 40)console.log('Obesidade Grau III ou Morbido')
        
    else {console.log('Error')
        break;
    }


    sair = readLine.question('Digite "sair" para encerrar!')

}