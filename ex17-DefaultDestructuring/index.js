// Default destructuring é uma feature do ES6 que permite adicionar um valor numa propriedade não existente tanto em um objeto quanto em um array

// OBJETO 
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// ARRAY
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

