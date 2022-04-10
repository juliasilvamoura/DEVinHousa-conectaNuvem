const inputCEP = document.getElementById('cep')
const botao = document.getElementById('botao')
let result = document.getElementById('resultado')

function buscaCEP(){
    const cep = inputCEP.value;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    fetch(url)
        .then(resposta => {
            console.log(resposta);
            resposta.json()
            .then(conteudo => {
                result.innerHTML = conteudo.localidade
            });
        })
        .catch(erro =>{
            console.log(erro);
        });
}


botao.addEventListener('click', buscaCEP);



// ou 

/*
function buscaCEP(cep){
    const url = `https://viacep.com.br/ws/${cep}/json`;
    fetch(url)
        .then(resposta => {
            console.log(resposta);
        })
        .catch(erro =>{
            console.log(erro);
        });
}


botao.addEventListener('click', () => {
    const cep = inputCEP.value;
    buscaCEP(cep);
});
*/