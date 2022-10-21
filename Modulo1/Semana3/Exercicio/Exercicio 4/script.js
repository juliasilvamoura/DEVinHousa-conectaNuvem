function calcular(){

var raiz = parseInt(document.querySelector('.raizPA').value)
var valor = parseInt(document.querySelector('.valor').value)

var resultado = document.querySelector('.resultado')

var pa = ''


for(i=0;i<10;i++){
    pa += `${valor}, `
    valor += raiz

    console.log(pa)
    resultado.innerHTML = pa
   
    
}

}