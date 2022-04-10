const imgCat = document.getElementById('img-cat')
const botao = document.getElementById('btn-cat')

const url = `https://api.thecatapi.com/v1/images/search`;

async function showMETheCat(){
    try {
        const resposta = await fetch(url);
        
        const conteudo = await resposta.json();
        imgCat.src = conteudo[0].url

    } catch(erro){
        console.log(erro);
    }
}

botao.addEventListener('click', showMETheCat);


// fazer assim que carregar a pagina apareça um gato diferente 
// showMETheCat(); ou se quiser com certeza que aconteça apenas quando carregar a página
window.onload = showMETheCat;
