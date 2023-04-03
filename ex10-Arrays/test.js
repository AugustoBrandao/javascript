const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
//Adicione seu código aqui
function verifyAges(array, age) {
    return array.every(item => item.age >= age);
}
  
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));