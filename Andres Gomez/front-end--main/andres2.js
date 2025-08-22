console.log(" // javascript // ");

let fruits = ["appple", "banana", "cherry"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("orange");
console.log(fruits);

console.log(fruits[3]);
console.log(fruits.length);

fruits.pop();
console.log(fruits);

fruits.map((fruits, index) => {
    console.log(index, fruits);
    });

