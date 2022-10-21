//

//DECLAREI UMA FUNÇÃO E ELA VAI RECEBER OUTRA POR PARAMETRO
// function blah(n) {
//     console.log(n);
// }


// blah (() => {
//     console.log('FUNCÃO POR PARAMETRO')
// })



// // Promise

// const minhaPromise = new Promise ( () => {}); // promise recebe uma função no paramentro, essa function faz nada

// console.log(minhaPromise)

// function ota(resolve, reject) {
//     resolve();
//     reject();
// }

const listaCEPs = {
    '88034001': {
        logradouro: 'Rua do Senai',
        localidade: 'sei la'
    }
}

// criação de promise
function buscaCEPpromise(cep) {
    return new Promise((resolve, reject) => { // promisse tem apenas dois parametros, pode por 2 ou 1 
      const resultado = listaCEPs[cep]; // Promisse, primeiro é a função que da sucesso e o segundo o que da rejeitado
      const erro = resultado
        ? false
        : 'CEP inválido!';
  
      if (erro) {
        reject(erro);
      } else {
        resolve(resultado);
      }
    });
  }
  

buscaCEPpromise('88034001')
  .then(resultado => { // then tipo ForEath do array para a promise
    // caso sucesso
    // exibe resultado
    console.log(resultado); // Se der certo
  })
  .catch(erro => { // Erro
    // caso tiver problema
    // exibe erro
    console.error(erro);
})
.finally(()=> { // No final ele executa independente pra falar que terminou 
    console.log('Final')
});


// FETCH usa promises 
const p =document.getElementById('display');
const campoCEP = document.getElementById('campo-cep').value;
const btnCEP = document.getElementById('btn-cep');

function buscaCEP() {
    const cep = campoCEP.value;
  
    if (!cep) {
      display.innerHTML = 'Informe um CEP!';
      return;
    }

fetch('./test.txt') // pode passar url e outro objeto como parametros
    .then(resposta => {
        resposta.text().then(conteudo => { // se a url for um JSON pode usar resposta.json e acessa o conteudo e imprime no console
            console.log(conteudo);
            //p.innerHTML = conteudo.logradouro;
            display.innerHTML = conteudo.localidade;
        })
        
    })
    .catch(erro =>{
        console.log(erro)
    });
}

btnCEP.addEventListener('click', buscaCEP);


// async
/*
try - deu certo
catch - deu erro
finally - sempre executa é o final 
*/