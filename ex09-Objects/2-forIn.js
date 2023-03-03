let pizzas = {
    sabor: "Frango com Catupiry",
    preco: 39.90,
    bordaCatupiry: true
}

//For in percorrendo as chaves de um objeto
for(let key in pizzas) {
    console.log(key, pizzas[key]); //acessando a chave, valor
}
console.log('\n');

//percorrer um array com for in
let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces){
    console.log(key, pizzasDoces[key]);
}
console.log("\n");

//EXERCÍCIO
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let keys in names){
    console.log(`Olá ${names[keys]}`)
}
console.log("\n");

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let keys in car){
    console.log(`${keys} : ${car[keys]}`)
}