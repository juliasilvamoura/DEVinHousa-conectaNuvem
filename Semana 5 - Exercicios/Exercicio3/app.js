const botao = document.getElementById('buscar')
const result = document.getElementById('mensagem')
const pTotal = document.getElementById('valor')
const campoProduto = document.getElementById('produto')

const produtos = [
    { nome: 'arroz', preco: 9 },
    { nome: 'feijao', preco: 12 },
    { nome: 'batata', preco: 8 },
    { nome: 'macarrao', preco: 5 }
    ];


    function buscaPreco(nameProduto){
        return produtos.find(p => p.nome === nameProduto);
        // return produto ? produtos.preco : 'Produto não encontrado!'
    }

    const valorTotal = produtos.reduce((acumulador, produto) => {
        return acumulador + produto.preco;
    }, 0)

    pTotal.innerText = `valor Total: R$ ${valorTotal}`

    botao.addEventListener('click', () =>{
        const nameProduto = campoProduto.value;
        const resultado = buscaPreco(nameProduto);
        let mensagem = 'Produto não encontrado';

        if (resultado) {
            mensagem = `R$ ${resultado.preco}`;
          }
         
          result.innerText = mensagem;
        })