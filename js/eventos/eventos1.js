console.log('Eventos!');

const btn = document.getElementById('boton')
// const btn = document.querySelector('#boton')

// btn.addEventListener( 'click', onClickHandler )

// function onClickHandler() {
//     console.log('hiciste click en el botón');
// }

// btn.addEventListener('click', ()=>{console.log('hiciste click en el botón');})

const inp = document.getElementById('entrada')
inp.oninput = () => { console.log('Hubo cambio'); }

btn.onclick = () => {
    console.log('hiciste click en el botón')
    console.log( inp.value );
}

