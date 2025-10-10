let number = 5;
let firstName = "Pedro";
let isBoolean = true;
let ex = null;

console.log(typeof number);
console.log(typeof firstName);
console.log(typeof isBoolean);
console.log(typeof ex);

function esParImpar(num) {
    if (num === 0 || num === 1) {
        return "Ingrese un numero mayor a 0 o 1";
    }

    return num % 2 ? "Impar" : "Par"
}

console.log(esParImpar(4));
console.log(esParImpar(1));

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter(el => el > 3));

const arr = [1, 2, 3, 4, 5];

console.log(arr.map(el => el * 2));
console.log(arr.reduce((acc, sum) => acc + sum));

const persona = {
    nombre: "Paul",
    edad: 44,
    ciudad: "Trujillo",
    sumar: function(a, b) {
        return a + b;
    },

    restar: function(a, b) {
        return a - b;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona.sumar(5, 29));
console.log(persona.restar(6, 3));

const array = [10, 20, 30, 40, 50];

let [a, b, c] = array;

console.log(a, b, c);

const obj = { nombre: 'Ana', edad: 25, ciudad: 'Barcelona' };

let {nombre,_, ciudad} = obj;

console.log(nombre, ciudad);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]);

function multiplicadorPor(n) {
    return function(x) {
        return x * n;
    }
}

const result = multiplicadorPor(8);
console.log(result(5));

class Persona {

    constructor(name, edad) {
        this.name = name;
        this.edad = edad;
    }

    presentarse() {
        return `Hola mi nombre es ${this.name} y mi edad es ${this.edad} anos`;
    }
}

const persona1 = new Persona("Pol", 44);

console.log( persona1.name);

console.log(persona1.presentarse());

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr3
    .filter(el => !(el % 2))
    .map(el => el * 2)
    .reduce((acc, el) => acc + el));
