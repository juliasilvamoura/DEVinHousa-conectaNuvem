const listaProduto = document.querySelector('.listaProduto')
const bntAdicionar = document.querySelector('.adicionar')
const bntSalvar = document.querySelector('.salvar')
const bntCarregarLista = document.querySelector('.carregarlista')

var lista = [];

bntAdicionar.addEventListener('click', salvarCompra)
bntSalvar.addEventListener('click', converterJSON)
bntCarregarLista.addEventListener('click', carregarLista)



function salvarCompra(){
    const produtos = document.querySelector('.produtos').value
    if(produtos == ''){
        alert("Error!")
    } else{ // poderia fazer if(campo.value) para saber se ele não é vazio
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const img = document.createElement('img')

    h3.innerHTML = produtos
    img.src='https://cdn-icons-png.flaticon.com/512/39/39220.png'
    img.alt='Icone lixeira'
    img.addEventListener('click', removerProduto)

    li.appendChild(h3)
    li.appendChild(img)

    listaProduto.appendChild(li)
    
    lista.push(produtos)
    
    
    }
       
}


function removerProduto(e){
    const produtoClicado = e.target.parentNode;

    produtoClicado.remove()
}


function converterJSON(){
    var listJSON = JSON.stringify(lista) 

    // localStorage.setItem('ListaDeCompras', JSON.stringify()); ou

    localStorage.setItem('ListaDeCompras', listJSON);
    //console.log(listJSON)
}

function carregarLista(){
    //var retorno = localStorage.getItem('ListaDeCompras')
    //console.log(retorno)
    var listaJSON = localStorage.getItem('ListaDeCompras')
    if(listaJSON){
        JSON.parse(listaJSON)
    }

    
}