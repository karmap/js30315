console.log('Operadores');

// const date = localStorage.getItem('date') || new Date()
// localStorage.getItem('date') ? null : localStorage.setItem('date', date)

let date = localStorage.getItem('date')
if (!date) {
    date = new Date()
    localStorage.setItem('date', date)
}

// const valor = valor1 || valor2

// condicion ? 'Todos los campos son correctos' : 'Hay error'

// date ? console.log('ya hay fecha', date)
//      : localStorage.setItem('date', new Date())


const root = document.getElementById('root')

const dateElement = document.createElement('h3')
dateElement.innerText = date

root.appendChild(dateElement)