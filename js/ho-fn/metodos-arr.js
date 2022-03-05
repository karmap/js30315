console.log('Métodos arrays');

const productos = [
    {id: 1, titulo: 'iPhone', precio: 1000, stock: 5, descuento: 10},
    {id: 2, titulo: 'Xiaomi', precio: 200, stock: 6, descuento: 20},
    {id: 3, titulo: 'Samsung', precio: 800, stock: 7, descuento: 15},
    {id: 4, titulo: 'Motorola', precio: 300, stock: 10, descuento: 30},
]

productos.forEach( element => {
    console.log(element.titulo);
    console.log('precio con descuento ' + precioConDescuento( element.precio, element.descuento ) );
})

function precioConDescuento( precio, descuento ) {
    // lógica para calcular el precio final
    return precio - ((precio * descuento) / 100)
}

// const nuevoArray = productos.map( (e) => { return e.titulo} )
const nuevoArray = productos.map( e => e.titulo.toUpperCase() )
console.log(nuevoArray);

const porId = productos.find( producto => producto.id == 2 )
console.log('Búsqueda por id: ', porId );

const mayor500 = productos.filter( producto => producto.precio > 500 )
console.log('Búsqueda precio mayor a 500: ', mayor500 );

// Otro ejemplo de map
const numeros = [5,6,7,5,4,6,4]
console.log( numeros.map( n => 'número: ' + n ) )
console.log(numeros);


const conSome = productos.some( producto => producto.titulo == 'iPhone' )
console.log('Búsqueda por nombre con some(): ', conSome );

const total = numeros.reduce( (acc, num) => acc + num , 0 )
console.log('suma total: ', total);

const stockTotal = productos.reduce( (acc, p) => acc + p.stock, 0 )
console.log('Stock total: ', stockTotal);

// const ids = productos.reduce( (acc, p) => `${acc},${p.id}` , '' )
const ids = productos.map( p => p.id ).join(',')
console.log(ids);