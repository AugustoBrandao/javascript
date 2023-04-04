// SORT - Ordena um array de acordo com um critério

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort(); // Organizar em ordem alfabética
//console.log(food);

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b); //Organizar em ordem crescente
//console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// troca a operação para b - a
inventory.sort((a, b) => b - a); // Ordem decrescente
//console.log(inventory); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Ao trabalhar com strings e utilizar o sort sem nenhum parâmetro, ele entende que é para ordenar por ordem alfabética. 
//Nesse caso, quando há elementos como números, o sort converte para string e realiza a comparação de acordo com a tabela de caracteres unicode 
//e, nela, o computador entende que o número 10, número 1 seguido do número 0, vem antes do número 2

// ------------------------------------------------------------------------------------------------------------------------------------------------- //
//  UTILIZANDO O SORT EM UM ARRAY DE OBJETOS
const gamers = [
  {
    name: 'Eduardo',
    points: [20, 22, 100, 10, 0]
  },
  {
    name: 'Ana',
    points: [0, 20, 10, 100, 100]
  },
  {
    name: 'Bob',
    points: [0, 100, 10, 10, 5, 20]
  },
  {
    name: 'Carlo',
    points: [3, 20, 10, 10, 10]
  }
];

// Ordenar esses gamers
gamers.sort((item1, item2) => item1.name > item2.name ? 1 : -1); // Organizar por ordem alfabética dos nomes
console.log(gamers);

//Organizar por pontos
gamers.sort((item1, item2) => {
  let pointsA = 0;
  let pointsB = 0;
  item1.points.forEach(element => pointsA += element);
  item2.points.forEach(element => pointsB += element);
  return pointsA - pointsB;
})

console.log(gamers);

// -------------------------------------------------------------------------------------------------------------------------------- //
//  PARA FIXAR
//Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((item1, item2) => item1.age - item2.age);
console.log(people);