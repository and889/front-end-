console.log(" // javascript // ");

let fruits = ["appple", "banana", "cherry"];

console.log(" ")

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(" ")

fruits.push("orange");
console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);

console.log(" ")

fruits.pop();
console.log(fruits);
fruits.map((fruits, index) => {
    console.log(index, fruits);
    });

console.log(" ")

let score = Math.random()*100;
console.log("punaje:", Math.round(score));

console.log(" ")

function greet(name) {
  return "Hola " + name;
}
console.log("///// Función clásica /////");
console.log("El resultado de pasar 'Diego' a la función greet es:");
console.log(greet("Diego"));

console.log(" ")

function add(a, b) {
  return a + b;
}
console.log("///// Función con 2 parámetros y retorno /////");
console.log("El resultado de pasar 5 y 3 como parámetros a la función add es:");
console.log(add(5, 3));

console.log(" ")

const multiply = (a, b) => a * b;
console.log("///// Función flecha /////");
console.log("El resultado de pasar 4 y 2 como parámetros a la función multiply es:");
console.log(multiply(4, 2));
