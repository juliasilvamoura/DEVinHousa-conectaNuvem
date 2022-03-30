const botao = document.querySelector('.botao')
const entrada = document.querySelector('.entrada')
const saida = document.querySelector('.saida')


botao.addEventListener("click", () => {
    mensagemOla(entrada)
})

const mensagemOla = (nome) =>{
    //console.log(nome.value)
    saida.innerHTML = `Olá, ${nome.value}!`
}