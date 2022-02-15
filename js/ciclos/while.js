console.log('Ciclos con while');


let number = 50;

// while ( number != 50 ){
//     number = prompt('Adivina el número')
//     console.log(number);
// }

// do {
//     number = prompt('Adivina el número')
//     console.log(number);
// } while ( number != 50);

let contador = 0
let palabra = ''
let ganador = false

while ( true ) {
    palabra = prompt('Adivina la palabra')
    contador++
    if (palabra == 'abeja') {
        ganador = true
        break;
    }
    if (contador == 3) {
        break;
    }
}

if (ganador) {
    alert('Ganaste')
} else {
    alert('Perdiste')
}

// while (palabra == 'hola') {
//     palabra = prompt('Saludame')
//     console.log(palabra);
// }

