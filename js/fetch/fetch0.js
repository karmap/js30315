console.log('Ejemplo 0 fetch');

const URL = '/js/fetch/data/data.json'

fetch(URL)
  .then( res => res.json() )
  .then( data => {
    //   console.log(data);
    data.forEach(e => {
        console.log(e.title);
    });
  });

// const response = await fetch(URL)
// const data = await response.json()

// data.forEach(e => {
//     console.log(e.precio);
// });

(async () => {
    const response = await fetch(URL)
    const data = await response.json()

    data.forEach(e => {
        console.log(e.precio);
    })
})();
