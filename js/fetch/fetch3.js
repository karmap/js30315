console.log('API de Rick & Morty');


function getCharNamesAndFirstEpisode(callback) {
    const URL_CHARS = 'https://rickandmortyapi.com/api/character'

    fetch(URL_CHARS)
        .then( res => res.json() )
        .then( data => {
            const {results: chars} = data
            console.log(data);
            chars.forEach(element => {
                // console.log(element.name);
                // console.log(element.episode[0]);
                fetch(element.episode[0])
                    .then( res => res.json() )
                    .then( data => {
                        callback(element.name, data.name)
                        // console.log(data);
                    })
            });
        })
}

function callback(...params) {
    console.log(params.toString());
    // personajes.push(char)
}

getCharNamesAndFirstEpisode(callback)
console.log('arreglo de chars');

