
const arrayNumeros = [1 ,2 , 3, 4, 5, 6, 7, 8, 9];
let arrayQuadrados = []
let arrayResult = []

arrayNumeros.map((numero) => {
    arrayQuadrados.push(numero**2);
})

console.log(`Array de quadrados: ${arrayQuadrados}`)


arrayQuadrados.filter((numero) => {
    arrayResult.push(numero>30)
})

console.log(`Array de resultante: ${arrayResult}`)