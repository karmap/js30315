console.log('Eventos4');

const enviar = document.getElementById('send')

enviar.onclick = e => {
    e.preventDefault()
    const parent = e.target.parentNode
    console.log( parent.children[0].value );
    console.log( parent.children[1].value );
    console.log(this);
}