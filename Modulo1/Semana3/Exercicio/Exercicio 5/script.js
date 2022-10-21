

function relogio(){
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes()
    var segundos = new Date().getSeconds()

    document.getElementById('horario').value = `${hora}:${minuto}:${segundos}`
    
    var data= new Date()
    var atualizado = data.setSeconds(data.getSeconds()+1)
    atualizado = new Date(atualizado)
    document.getElementById('horario').value = atualizado.toLocalDateString('pt-BR', {hour: 'numeric', minute: 'numeric', second: 'numeric'});


}

setInterval(relogio, 1000)