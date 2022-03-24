console.log('Promesas');

const promesa = new Promise( (resolve, reject) => {

    // reject('falló la promesa!!!')

    setTimeout(() => {
        resolve('la promesa se resolvió')
    }, 5000);
})

promesa.then( result => {
    console.log(result);
}).catch( err => {
    console.error(err);
})

console.log('terminó mi script');