console.log('Eventos 2');

const boton = document.getElementById('boton')

boton.addEventListener('click', () => {
    const input = document.getElementById('entrada')
    const nombreProducto = input.value

    const nuevoProducto = document.createElement('li')
    nuevoProducto.innerText = nombreProducto
    
    const root = document.getElementById('root')
    root.appendChild(nuevoProducto)
})