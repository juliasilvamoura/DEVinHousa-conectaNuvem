
export function concatena(vetorA, vetorB){ //a função pega dois vetores e contatena utilizando o spread
    return [...vetorA,...vetorB];
}

// ou 

 //a função pega dois vetores e contatena utilizando o Arrow function

 const contatena2 = (vetorA, vetorB) => [...vetorA,...vetorB];
