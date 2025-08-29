console.log("Ejercicio")

class SerVivo{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  alimentarse() {
    console.log(`${this.nombre}se esta alimentando`)
  }
}

class Animal extends SerVivo{
  alimentarse(){
    console.log(`${this.nombre}esta comiendo`)
  } 
  
}

class Planta extends SerVivo{
  alimentarse(){
    console.log(`${this.nombre}esta haciendo la fotosintesis`)
  }
}

const gato = new Animal(michi, 2);
console.log(`El nombre del gato es ${this.nombre}`);
gato.alimentarse();

const flor = new Planta(flor, 100);
console,log(`el nombre de la planta es ${this.nombre}`);
flor.alimentarse();
