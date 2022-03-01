console.log('Retornar funciones');

function regresaFuncion() {
    return () => { console.log('Hola mundo'); }
}

// regresaFuncion()()

const nuevaFuncion = regresaFuncion()
// va a contener
// () => { console.log('Hola mundo'); }

nuevaFuncion()


function multiplicarPor(multiplicador) {
    // return numero => { return numero * multiplicador }
    return numero => numero * multiplicador
}

const multiplicarPor10 = multiplicarPor(10)
// numero => numero * 10

const multiplicarPor12 = multiplicarPor(12)
// numero => numero * 12

console.log(multiplicarPor10(5));
console.log(multiplicarPor12(5));


function saludador(nombre) {
    return () => { console.log('Hola ' + nombre) }
}

const saludarJuan = saludador('Juan')
saludarJuan()

const saludarAna = saludador('Ana')
saludarAna()

