
//Switch Case
var num = 3

switch (num){
    case 0:
        alert('Zero')
        break;
    case 1:
        alert('um')
        break;
    case 2:
        alert('dois')
        break;
    default:
        alert('diferente de 0, 1 e 2')
}

// While

let cont = 0

while(cont <4){ // ENQUANTO A CONDIÇÃO FOR VERDADEIRA
    alert("OLAR") //EXECUTA O BLOCO DE INSTRUÇÕES 
    cont++;
}

// Do While - while invertido, primeiro executa depois confere a condição

do{
    console.log("Teste")
    i++;
} while(i< 4)


// setTimeout você chama apenas uma vez dentro de um intervalo
//setInterval chama várias vezes com um intervalo

// vetores são numeros inteiros de 0 a infinito

// Objeto você pode fazer nome e chave

var meuObj = {idade:82}
var obj = {
    a:[26,32,42],
    b:[55,99,11]
}

// acessar obj
obj.a[2] // retorna


//Alterar
meuObj.nome = 'Grace'
meuObj['idade'] = 42 // altera o valor para idade

//Acessar
meuObj['idade']; // retorna 82
meuObj.idade; // retorna 82


//Objetos
/*
var carro = {
    marca: 'ford',
    modelo: 'sei la',
    ano: 1998,
    'revisões': [ // se não quer deixar no padrão de variável coloca aspas mas tem que por na hora de acessar também
        {
            data:'01/01/2022',
            descricao: 'trocar oleo'
        },
        {
            data: '01/02/2022',
            descricao: 'trocar pneus'
        }
    ]
};
*/

var carro = {
    marca: 'ford',
    modelo: 'sei la',
    ano: 1998,
    revisao: [ // se não quer deixar no padrão de variável coloca aspas mas tem que por na hora de acessar também
        {
            data:'01/01/2022',
            descricao: 'trocar oleo'
        },
        {
            data: '01/02/2022',
            descricao: 'trocar pneus'
        }
    ]
};

//Acessar
console.log(carro)
console.log(carro.modelo)
console.log(carro.revisao[0].descricao)


carro.revisao.forEach(function (item) {
    console.log(item);
});

// for in me da as keys
for(var key in carro){
    console.log(key); //só as chaves
    console.log(carro[key])
}


// for of me da os valores - usado apenas com velores
for(var item of Object.entries(carro)){ // Object.key(carro) (apenas as chaves) - values (vetor só com valores) e entries é entradas (tranforma vetor de vetores)
    console.log(item); //só as chaves
    
}

//isArray() testa se é um Array, é vetor


//JSON - o que não for boolean, null e numero pracisa das aspas em um objeto para JSON

//JSON.parse(texto para converter em objeto)

//JSON.stringify(transforma em string)

//p.innerHLTML = carroJSON;

//localStorage - só armazena Texto 
/*

localStorage.setItem('foo', 'bar')

localStorage.getItem('foo') //pegar o item

localStorage.removeItem('foo') //remova o item

localStorage.clear() // limpa tudo
*/

