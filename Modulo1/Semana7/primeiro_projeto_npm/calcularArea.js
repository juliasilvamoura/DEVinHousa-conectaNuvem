const readLine = require('readline-sync')

let menu = 0;

while (menu != 5) {
    console.log('1 - Circulo');
    console.log('2 - Quadrado');
    console.log('3 - Retangulo');
    console.log('4 - Triangulo');
    console.log('5 - Exit');
    menu = parseInt(readLine.question('menu: '));

    switch (menu) {
        case 1:
            circulo();
            break;
        case 2:
            quadrado()
            break;
        case 3:
            quadrado();
            break;
        case 4:
            triangulo();
            break;
        case 5:
            break;
        default:
            console.log('Valor incorreto')
    }

    function circulo() {
        let r = readLine.question('Raio: ');
        let raio = parseFloat(r).toFixed(2);
        let resultado = (3.14) * (raio ** 2)
        console.log(resultado)
    }

    function quadrado() {
        let lado1 = parseFloat(readLine.question('Lado 1/Base: '));
        let lado2 = parseFloat(readLine.question('Lado 2/Altura: '));
        let resultado = lado1 * lado2
        console.log(resultado)
    }

    function triangulo() {
        let base = parseFloat(readLine.question('Base: '));
        let altura = parseFloat(readLine.question('Altura: '));
        let resultado = (base * altura) / 2
        console.log(resultado)
    }
}