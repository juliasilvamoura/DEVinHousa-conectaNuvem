
export function calculaTotal(...produtos) { // usando rest já que é uma quantidade indefinida de produtos
    return produtos.reduce((acc, prod) => {
      return acc + prod.valor * prod.quantidade;
    }, 0);
  }