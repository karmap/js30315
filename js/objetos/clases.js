console.log('Clases');

class Personaje {
    constructor(nombre, vida, poder){
        this.nombre = nombre
        this.vida = vida
        this.poder = poder
    }
    atacar(valor){
        this.poder = this.poder + valor
    }
    recibirAtaque(valor){
        const nuevaVida = this.vida - valor
        if (nuevaVida <= 0) {
            console.log(this.nombre + ' ya está muerto');
            this.vida = 0
        } else {
            this.vida = this.vida - valor
        }
    }
    mostrarDatos(){
        console.log(`${this.nombre} tiene ${this.vida} vida y ${this.poder} poder`);
    }
}

const hobbit1 = new Personaje('Frodo', 10, 50)
const elfo = new Personaje('Sam', 8, 60)
const elfo2 = new Personaje('Dobby', 9, 70)

elfo.mostrarDatos()
elfo.atacar(10)
elfo.recibirAtaque(3)
elfo.mostrarDatos()

hobbit1.mostrarDatos()

elfo2.recibirAtaque(20)
elfo2.mostrarDatos()
