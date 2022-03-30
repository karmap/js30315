const btn = document.getElementById('boton')

btn.onclick = (event) => {
    console.log('click');
    console.log(event.target);
}