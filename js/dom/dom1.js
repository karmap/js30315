console.log('Empezamos con el DOM');

const root = document.getElementById('root')

console.log(root);
console.log(root.innerHTML);

const title = document.getElementById('title')
console.log(title.innerText);
title.innerText = 'Hola JavaScript'

const list = document.getElementsByTagName('li')
console.log(list);

for (const element of list) {
    const newLi = `<strong>${element.innerText}</strong>`
    console.log(newLi);
    element.innerText = ''
    element.innerHTML = newLi
}