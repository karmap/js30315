console.log('Ejercicio after');

// Pedir calificaciones
// Hasta que el usario teclee: "fin"
// Calcular su promedio e imprimirlo en consola

let entrada
let contador = 0
let suma = 0

// function calcularPromedio(suma, n) {
//     return suma/n
// }

const calcularPromedio = (suma, n) => suma/n
// const calcularPromedio = (suma, n) => {return suma/n}
// const calcularPromedio = (x, y) => x/y

while (true) {
    entrada = prompt('Dame una calificación (fin para terminar)');
    if (entrada == 'fin') {
        break
    }

    let calif = parseInt(entrada)
    if ( calif >= 0 &&  calif <= 10) {
        contador++
        suma += calif
    } else {
        alert('Esa calificación no es válida')
    }
}

console.log('suma', suma);
let promedio = calcularPromedio(suma, contador)
console.log('promedio', promedio);
// console.log('promedio', calcularPromedio(30, 3));

let root = document.getElementById('root')
root.innerHTML = promedio

// document.getElementsByClassName()
// document.querySelector()