function calcularIdade(){
    var aniversario = document.querySelector('.data').value
    var data = new Date(aniversario) // converte a data em Object tipo data

    var dia = data.getDate() + 1
    var mes = data.getMonth() + 1
    var ano = data.getFullYear()

    var idade = 0

    //console.log(`${dia} , ${mes} , ${ano}`)
    

   var diaAtual = new Date().getDay()
   var mesAtual = new Date().getMonth() + 1
   var anoAtual = new Date().getFullYear()

   
   var aux = anoAtual - ano

   if(mesAtual < mes){
        idade = aux - 1;
   } else if(mesAtual > mes){
       idade = aux
   } else if(mesAtual == mes ){
       if(diaAtual>=dia){
           idade = aux
       } else{
           idade = aux -1
       }
   } 

   var resultado = document.querySelector('.resultado')
   resultado.innerHTML = idade + " anos" 
}