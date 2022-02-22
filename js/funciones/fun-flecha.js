console.log('Funciones flecha');

// ( () => {
//     console.log('Hola');
// })()

const saludar = () => {
    console.log('Hola');
}

saludar()

// const alCuadrado = (numero) => {
//     resultado = numero * numero
//     return resultado
// }

// const alCuadrado = (numero) => {
//     return numero * numero
// }

// const alCuadrado = n => {
//     return n * n
// }

const alCuadrado = n => n * n

let res = alCuadrado(9)
console.log(res);

alert(alCuadrado(7));

