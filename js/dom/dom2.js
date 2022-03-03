console.log('Segundo ejemplo DOM');

const root = document.querySelector('#root')
console.log(root.innerHTML);

const nuevoProducto = document.createElement('li')
nuevoProducto.innerText = 'Producto 4'

root.append(nuevoProducto)

