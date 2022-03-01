console.log('Funciones por parámetro');

const nombresClaseJS = ['Rodrigo', 'Agustín', 'Emeralda', 'Diego', 'Christian', 'Elena', 'Marcos']

function transformarNombres(nombres, tranformardor) {
    let nuevosNombres = []
    for (const nombre of nombres) {
        nuevosNombres.push( tranformardor(nombre) )
    }
    return nuevosNombres
}

const convertirMayusculas = texto => texto.toUpperCase()

console.log( convertirMayusculas('Hola mundo') )

const nombresMayus = transformarNombres( nombresClaseJS, convertirMayusculas )
console.log( nombresMayus.join('-') );

const nombresMinus = transformarNombres( nombresClaseJS, t => t.toLowerCase() )
console.log( nombresMinus.join('*') );

