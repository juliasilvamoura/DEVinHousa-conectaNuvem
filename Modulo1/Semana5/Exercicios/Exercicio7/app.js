
async function aguarda3Segundos() {
    await new Promise(
        resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log('Função diz: Terminei!'); // ta esperando a promisse resolver para chaamr o await, no caso semora 3 segundos
}

async function euNaoEspero(){
    aguarda3Segundos(); // ele não executa primeiro pq está fora do await (o console.log do aguarda3Segundos)
    console.log('Eu não espero');
}

euNaoEspero();


// se colocar o aguarda3Segundos dessa forma com o console.log em cima ele executa primeiro:

/*
async function aguarda3Segundos() {
    console.log('Função diz: Terminei!');
    await new Promise(
        resolve => setTimeout(resolve, 3000)); // 3 sec
    
}


saida: Função diz: Terminei!
saida2: Eu não espero
*/


// continuando

async function euEspero(){
    await aguarda3Segundos(); // agora deve aguardar o aguarda3Segundos terminar para continuar
    console.log('Eu espero');
}

euEspero();


/*
saida: Função diz: Terminei!
saida2: Eu espero
*/
