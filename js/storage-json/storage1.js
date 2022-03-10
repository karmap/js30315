console.log('Storage 1');

localStorage.setItem('fecha', new Date())

const fechaGuardada = localStorage.getItem('fecha')

console.log(fechaGuardada);