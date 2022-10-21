console.log('Funciona!')

var vetor = [] //não precisa pré estabelecer o tamanho

vetor.push('fusca')
vetor.push('belina') // não precisa definir o tipo (number, string)

//var array = new Array[] definição Array
console.log(vetor.length) // saber o tamanho

var texto = 'string'

var textoNovo = texto.replace('a','#') //altera a primeira ocorrencia por #
var textoNovoAll = texto.replaceAll('a','#') // dubstitui todos os 'a' por #

//Exercicio 2 - Exemplo de estrutura de controle de fluxo

var a = 4;

a % 2 ===0
? console.log(a + 'é par')
: console.log(a + 'é impar')

