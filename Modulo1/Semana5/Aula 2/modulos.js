import { variavel } from './util.js'

console.log(variavel)


// EXEMPLOS OPERADORES REST SPREAD

// function apresenta(nome, idade){
//     console.log(`Olá ${nome} e ${idade}`)
// }

//apresenta("Julia", 23)


function apresentaRest(nome, ...resto){
        console.log(`Olá ${nome} e (${resto})`)
    }
// Rest pega tudo o que tem no parametro e condensa em um unico vetor

apresentaRest('Julia','Moura', 23, 'Engenheira')



function somaTudo(...numeros){
    return numeros.reduce((acumulador, num) => acumulador + num, 0) // zero é o valor inicial do acumulador
}

const result = somaTudo(2,3,4,5,6,7);
console.log(result)


// EXEMPLO SPREAD

const julia =['Julia', 23, 'Programadora']

function apresentarse(nome, idade, profissao){
    console.log(nome + idade +profissao)
}

apresentarse(...julia) // ele pega 1 array e divide o conteudo dele para as variaveis

const exUm = [1,2,3]
const exDois = [4,5,6]
const concat = [...exUm, ...exDois]

console.log(concat)


const obj1 = {nome: 'Ju', idade: 23}
const obj2 = {...obj1, nome: 'Julia'}

console.log(obj2)


//EXEMPLO DESTRUCT

const {nome, idade, ...sobrou} = obj1 // em objeto tem que por o nome igual as chaves do objeto, no vetor ele respeita a ordem

console.log(nome, idade, sobrou)

const vet = [1,2,3,4,5];


const [a,b] = vet
console.log(a,b)