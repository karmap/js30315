console.log('Función constructora');

function Alumno( nombre, edad, pais ) {
    this.name = nombre
    this.age = edad
    this.country = pais
    
    this.mostrarDatos = function () {
        console.log("Datos:", this.name, this.age, this.country);
    }
}

const alumno1 = new Alumno('Roberto', 25, 'Argentina')
const alumno2 = new Alumno('Florencia', 35, 'Chile')

console.log(alumno1);
console.log(alumno2.age);

// let nombre = prompt('Dame el nombre')
// let edad = prompt('Dame la edad')
// let pais = prompt('Dame el pais')

// const alumnoDesdeEntrada = new Alumno(nombre, edad, pais)
// console.log(alumnoDesdeEntrada);

alumno1.mostrarDatos()
alumno2.mostrarDatos()