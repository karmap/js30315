console.log('Objetos');

// objeto literal
const producto1 = {
    id: 1,
    titulo: 'iPhone',
    precio: 1000,
    stock: 5,
    descuento: 20

}

// Esto no se puede hacer por que es const
// producto1 = {}

producto1.otraprop = 'hola'

// console.log(producto1.titulo);
console.log(producto1['stock']);

for (const prop in producto1) {
    console.log(prop, producto1[prop]);
}

