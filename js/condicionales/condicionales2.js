console.log('Condicionales ejemplo 2');

// pedir ingreso
// si es menor que 100 entonces no cobra IVA
// mayor que 100 pero menor que 200 restar el 21% de IVA
// si es mayor que 200 restar 35% de IVA
// regrese la ganancia neta

let ingreso = prompt('Digite el ingreso');

if ( ingreso < 100 ) {
    alert('Su ganancia neta es: ' + ingreso);
    // alert(`Su ganancia neta es: ${ingreso}`);
} else if ( ingreso < 200 ) {
    // asumir que el calculo es correcto
    let gananciaNeta = ingreso * 0.79;
    alert('Su ganancia neta es: ' + gananciaNeta.toFixed(2));
} else {
    let gananciaNeta = ingreso * 0.65;
    alert('Su ganancia neta es: ' + gananciaNeta.toFixed(2));
}
