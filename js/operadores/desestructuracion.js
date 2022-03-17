console.log('Desestructuración');

const productos = [
    {id: 1, titulo: 'iPhone', precio: 1000, stock: 5, descuento: 10},
    {id: 2, titulo: 'Xiaomi', precio: 200, stock: 6, descuento: 20},
    {id: 3, titulo: 'Samsung', precio: 800, stock: 7, descuento: 15},
    {id: 4, titulo: 'Motorola', precio: 300, stock: 10, descuento: 30},
]

console.log(productos[0]);

const {titulo, precio} = productos[0]
console.log(titulo, precio);

const {titulo: title, precio: price} = productos[1]
console.log(title, price);

const imprimeDatos = ( {titulo: title, precio: price} ) => {
    console.log('Fn', title, price);
}

imprimeDatos(productos[2])
imprimeDatos(productos[3])


console.log(...productos);
console.log(productos[0], productos[1], productos[2], productos[3]);

const numeros = [8,8,9,10,7]

console.log( Math.max(...numeros) )
console.log( Math.min(...numeros) )

const max = (...num) => {
    return num.reduce( (acc, n) => acc > n ? acc : n , 0)
}

console.log('max()', max(1,2,3) )
console.log('max()', max(1,2,3,5,4,5,6,6,7,9,5,4,5) )