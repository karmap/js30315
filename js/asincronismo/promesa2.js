console.log('Promesa 2');

const randPromise = () => {
    return new Promise( (resolver, rechazar) => {
        const rand = Math.random()
        console.log(rand);
        if (Math.round(rand) == 1) {
           resolver('Se resolvió!') 
        } else {
            rechazar('!!! Error se rechazó')
        }
    })
}

randPromise()
    .then( response => {
        console.log( response );
    })
    .catch( console.log )

