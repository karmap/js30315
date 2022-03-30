console.log('API de Rick & Morty con await');


async function getCharNamesAndFirstEpisode() {
    const URL_CHARS = 'https://rickandmortyapi.com/api/character'
    const res = await fetch(URL_CHARS)
    const {results: chars} = await res.json()

    chars.forEach( async (char) => {
        // console.log(e.name);
        // console.log(e.episode[0]);
        const res = await fetch(char.episode[0])
        const {name: episodeName} = await res.json()

        console.log(char.name, ',' , episodeName);
    });
}

async function getChars() {
    const URL_CHARS = 'https://rickandmortyapi.com/api/character'
    const res = await fetch(URL_CHARS)
    const {results: chars} = await res.json()
    console.log(chars);
}

getCharNamesAndFirstEpisode()
getChars()

