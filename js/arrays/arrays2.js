console.log('Arrays 2');

class Grade{
    constructor(name, score){
        this.name = name
        this.score = parseInt(score)
    }
}

let subjects = ['Matematica', 'Fisica', 'Química', 'Artes']
let grades = []

for (const subject of subjects) {
    let score = prompt(`Calificación de ${subject}`)
    grades.push(new Grade(subject, score))
}

console.log(grades);

let total = 0
grades.forEach( g => {
    total += g.score
})

console.log('promedio: ', total/grades.length);