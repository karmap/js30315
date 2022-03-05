console.log('Ejemplo adelantado de eventos');

const boton = document.getElementById('boton')
const entrada = document.getElementById('entrada')

boton.addEventListener('click', () => {
    console.log('Hola mundo desde eventos');
    console.log(new Date());
    console.log( entrada.value );
})

console.log(boton);