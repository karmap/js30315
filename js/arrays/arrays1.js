console.log('Arreglos');

// es burro o no?
const calificaciones = [6, 7, 5, 9, 5, 7]

for( let i = 0; i < calificaciones.length; i++){
    console.log(i, calificaciones[i])
}

let califQuitada = calificaciones.shift()
califQuitada++

calificaciones.unshift(califQuitada)

console.log(califQuitada);
console.log(calificaciones.join('-*-'));

const calificacionesRestantes = [6, 7]

let todas = calificaciones.concat(calificacionesRestantes)
console.log(todas);

console.log(todas.indexOf(9));

if (todas.includes(9)) {
    console.log('No es burro');
} else {
    console.log('Es burro :(');
}

