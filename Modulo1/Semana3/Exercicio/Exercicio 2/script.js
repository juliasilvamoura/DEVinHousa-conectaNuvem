
function acao(){
    var entrada = Number(document.getElementById('entrada').value)
    // var entrada = Number(document.querySelector('#entrada').value)
    var saida = document.querySelector('#resultado') 
  
    /* um tipo de IF
    if((entrada % 2) === 0){
        saida.innerHTML = "par"
        
    } else {
        saida.innerHTML = "Impar"
    }
    */
    
    
    entrada % 2 === 0
    ? saida.innerHTML = `${entrada} é par`
    : saida.innerHTML = `${entrada} é ímpar`
    
    
}