console.log('Empieza funciones');

// function saludo() {
//     console.log('Hola');
//     alert('hola')
// }

// saludo()

function numeroAlCuadrado ( numero ) {
    let result = numero * numero
    return result
    // return numero * numero
}

function numeroAlCubo ( numero ) {
    let result = numero * numero * numero
    return result
    // return numero * numero
}

let result = numeroAlCuadrado(5);
console.log(result);

console.log( numeroAlCuadrado(3) );
console.log( numeroAlCuadrado(6) );
console.log( numeroAlCuadrado(80) );
console.log( numeroAlCuadrado(4324) );