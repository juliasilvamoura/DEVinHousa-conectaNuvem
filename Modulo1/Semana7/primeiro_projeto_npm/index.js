/* Express */

// const express = require('express');
// const app = express();
// const port = 9090;

// app.get('/', (requisicao, resposta) => {
//         resposta.send('Hello Julia');
// });

// app.listen(port, () =>{
//     console.log('porta 9090');
// });

/* readLine-sync */

const readLine = require('readline-sync')

let nome = readLine.question('seu nome ');

console.log(nome)