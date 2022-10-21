
function calcular(){
    var valor1 = Number(document.getElementById('txtn1').value)
    var valor2 = Number(document.getElementById('txtn2').value)
    var operador = document.getElementById('operacao')
    var operacao = operador.value
    var resultado = document.getElementById('resultado')


    if(operacao == 'adicao'){
        var result = valor1 + valor2
    }else if(operacao == 'subtracao'){
        var result = valor1 - valor2
    }else if(operacao == 'multiplicacao'){
        var result = valor1 * valor2
    }else if(operacao == 'divisao'){
        var result = valor1 / valor2
    }
    resultado.innerHTML = `Resultado: ${result}`
}

