const inputCEP = document.getElementById('cep')
const botao = document.getElementById('botao')
let result = document.getElementById('resultado')

async function buscaCEP(){
    try {
        const cep = inputCEP.value;
        const url = `https://viacep.com.br/ws/${cep}/json`;
        const resposta = await fetch(url);

        //console.log(resposta);
        const conteudo = await resposta.json()
        result.innerHTML = conteudo.localidade
    } catch(erro){
        console.log(erro);
    }
}

botao.addEventListener('click', buscaCEP);