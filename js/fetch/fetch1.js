console.log('Ejemplo fetch');

const URL = 'https://swapi.dev/api/planets/'

fetch(URL)
    .then( respuesta => respuesta.json() )
    .then( datos => {
        // console.log(datos);
        agregarNamesAlDOM(datos.results)
    })

function agregarNamesAlDOM(planets) {
    let root = document.getElementById('root')
    root.innerHTML = null
    planets.forEach(p => {
        // console.log(p.name);
        let li = document.createElement('li')
        li.innerText = p.name
        root.appendChild(li)
    });
}



fetch('/js/fetch/data/data.json')
    .then( r => r.json() )
    .then( data => {
        console.log(data);
        data.forEach( prod => {
            console.log( prod.title);
        })
    })