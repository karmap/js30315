
async function getPlanets() {
    const URL = 'https://swapi.dev/api/planets/'
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data);
}

getPlanets()
