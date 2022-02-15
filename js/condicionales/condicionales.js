console.log('Empezando con condicionales');

// 1.- Pedir la edad
// 2.- Comparar la edad con diferentes límites
// 3.- Imprimir un mensaje respecto a cada condición

let edad = prompt('Ingresa tu edad')

if (edad == '') {
    alert('no ingresaste tu edad')
}

if (edad < 20) {
    console.log('Todavía no tienes 20');
} else if (edad < 30) {
    console.log('Estás en los 20s');
} else if (edad < 40) {
    console.log('Estás en los 30s');
}
else {
    // console.log('Ya tienes 40 o más');
    alert('Ya tienes 40 o más');
}