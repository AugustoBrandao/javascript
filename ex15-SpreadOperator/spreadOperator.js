// O SPREAD espalha os elementos, tanto de arrays quanto de objetos, e insere as informações novas sem alterar o array ou objeto original.
// Sua sintaxe é caracterizada por três pontos (...)

// SINTAXE
// 1- Variável que vai salvar o novo array
// 2- os colchetes, que caracterizam que é um array
// 3- os três pontos (...) que caracterizam que uma informação está sendo espalhada
// 4- O elemento a ser adicionado
//const variavel = [...arrayOriginal, itemParaAdicionar];

// EXEMPLO
const items = ['Camiseta', 'Carregador', 'Chinelo']; //Array original
const newItem = 'Meia';                              // item a ser adicionado

const newArrayItems = [...items, newItem]
console.log(newArrayItems); // [ 'Camiseta', 'Carregador', 'Chinelo', 'Meia' ]

// EXEMPLO - ADICIONANDO VÁRIOS ARRAYS EM UM SÓ
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// EXEMPLO - UTILIZANDO SPREAD EM OBJETOS PARA NÃO MODFICAR O OBJETO ORIGINAL
const person = {
    id: 1,
    name: 'Augusto'
}

const newPerson = {...person, age: 24};
console.log(newPerson);

// JUNTANDO DOIS OBJETOS NUM SÓ
const product = {
    id: 1,
    name: 'Camiseta',
};

const productPrice = {
  price: 23
}

const newProduct = {...product, ...productPrice};
console.log(newProduct);

// Como o spread espalha valores, ele também pode ser utilizado para enviar argumentos de uma função que recebe vários parâmetros.
//Ao invés de fazer assim:
console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800

// é melhor fazer assim:
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800


// PARA FIXAR: JUNTE DOIS ARRAYS EM UM SÓ

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['BANANA', 'MANGA', 'MAMÃO'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['SALADA', 'TOMATE', 'MANJERICÃO'];

const fruitSalad = (fruit, salad) => {
    return [...fruit, ...salad];
}

console.log(fruitSalad(specialFruit, additionalItens));