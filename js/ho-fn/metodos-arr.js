console.log('Métodos arrays');

const productos = [
    {id: 1, titulo: 'iPhone', precio: 1000, stock: 5, descuento: 10},
    {id: 2, titulo: 'Xiami', precio: 200, stock: 6, descuento: 20},
    {id: 3, titulo: 'Samsung', precio: 800, stock: 7, descuento: 15},
    {id: 4, titulo: 'Motorola', precio: 300, stock: 10, descuento: 30},
]

productos.forEach( e => {
    console.log(e.titulo);
    console.log('precio con descuento ' + precioConDescuento( e.precio, e.descuento ) );
})

function precioConDescuento( precio, descuento ) {
    // lógica para calcular el precio final
    return precio - ((precio * descuento) / 100)
}
