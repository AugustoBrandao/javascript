let animal = {
    nome: 'Jade',
    idade: 10,
    comida: 'petisco'
}

//Array com as chaves
let chaves = Object.keys(animal);

//Array com os valores
let valores = Object.values(animal);

//Array com as entradas
let entradas = Object.entries(animal);

console.log(chaves);        // [ 'nome', 'idade', 'comida' ]
console.log(valores);       // [ 'Jade', 10, 'petisco' ]
console.log(entradas);      // [ [ 'nome', 'Jade' ], [ 'idade', 10 ], [ 'comida', 'petisco' ] ]
console.log('\n')
console.log(animal['nome']);