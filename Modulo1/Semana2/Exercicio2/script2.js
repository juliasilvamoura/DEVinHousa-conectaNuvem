/*
document.getElementById("p2").innerHTML="Bora";

function alterarCor(){
    document.body.style.backgroundColor="pink";
    document.getElementById("p1").innerHTML="Turma show";
}
*/

var a = document.getElementById("area")
a.addEventListener('click', clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout', sair)



function entrar(){
    a.style.background = "blue"
    a.innerHTML = "Entrou!"
}

function sair(){
    a.style.background = "green"
    a.innerHTML = "Saiu!"
}

function clicar() {
    a.innerText = "Clicou!"
    a.style.backgroundColor = "red"
}