// Só pode usar um export default diferente do export

// function normal

function comum(){
    console.log('comum')
}

const anonima = function() {
    console.log('comum')
}


//Arrow function

const arrow = () =>{
    console.log('arrow')
}

//Arrow com parametro

const arrowA = a =>{
    return 'arrow '+a; // com chaves precisa de return
}

arrowA('batata');

const arrowC = (a,b) => a+b; // sem chaves não precisa de return

comum()
anonima()
arrow()
function mostraThisA = () => {
    console.log(this, this.nome)
}
const fruta = {
    nome: 'Melao',
    imprimirA: mostraThisA
};

fruta.imprimirA();

// this em uma função faz referença ao objeto no contexto que essa função está quando é executada
// this no arrow faz refenrecia ao objeto quando é criado 



//Metodos de Arrays

const vet = [1,2,3,4,5,6,7,8,9];

vet.forEach(function (numero){
    console.log(numero)
})


vet.forEach(numero => console.log(numero))


const result = vet.map(function (numero){ // ser usar filter ao inver de fazer um array com todos os returns (map) ele cria o array com itens que retornem true
    console.log(numero)
})


const result2 = vet.filter(function (numero){
    return numero % 2 == 0
})

const result3 =vet.some(numero => numero === 55) // returna true ou false se pelo menos um nos casos é verdadeiro

console.log(result) // se usar o forEach no lugar do map ee resulta em undefine 

let acumulador =0
const result4 =vet.forEach(numero => { // forEach não espera um retorno
    acumulador += numero
});