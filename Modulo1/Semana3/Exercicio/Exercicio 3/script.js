
var somar = document.querySelector('.somar')
var subtrair = document.querySelector('.subtrair')
var dividir = document.querySelector('.dividir')
var multiplicar = document.querySelector('.multiplicar')


var saida = document.querySelector('.saida')

somar.addEventListener('click', Somar)
subtrair.addEventListener('click', Subtrair)
dividir.addEventListener('click', Dividir)
multiplicar.addEventListener('click', Multiplicar)

function Somar(){
    var n1 = Number(document.querySelector('.valor1').value)
    var n2 = Number(document.querySelector('.valor2').value)
    saida.value = n1 + n2 
    //console.log(saida)

}

function Subtrair(){
    var n1 = Number(document.querySelector('.valor1').value)
    var n2 = Number(document.querySelector('.valor2').value)
    saida.value = n1 - n2 
}

function Dividir(){
    var n1 = Number(document.querySelector('.valor1').value)
    var n2 = Number(document.querySelector('.valor2').value)
    n2 != 0
    ? saida.value = n1 / n2 
    : saida.value = "Error"
}

function Multiplicar(){
    var n1 = Number(document.querySelector('.valor1').value)
    var n2 = Number(document.querySelector('.valor2').value)
    saida.value = n1 * n2
}