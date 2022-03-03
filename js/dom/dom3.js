console.log('DOM 3');

const productos = [
    {id: 1, titulo: 'iPhone', precio: 1000, stock: 5, descuento: 10},
    {id: 2, titulo: 'Xiaomi', precio: 200, stock: 6, descuento: 20},
    {id: 3, titulo: 'Samsung', precio: 800, stock: 7, descuento: 15},
    {id: 4, titulo: 'Motorola', precio: 300, stock: 10, descuento: 30},
]

const root = document.getElementById('root')
root.innerHTML = null

productos.forEach( (producto) => { 
    console.log(producto.titulo);

    const nuevoProducto = document.createElement('li')
    nuevoProducto.innerText = producto.titulo

    root.append(nuevoProducto)
})