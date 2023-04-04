// A função map possui a mesma estrutura que o forEach, o que muda é o seu retorno
// A função map percorre todos os elementos de um array e RETORNA um array novo com as modificações
// O forEach não traz um retorno, mas o map sim!

const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];
pessoas.map((item, index, array) => console.log(item, index, array));

const novoArray = pessoas.map(item => item.toUpperCase());
console.log(novoArray);

//Criar um objeto com duas propriedaddes: nome e empresa a partir de um array de strings
const novasPessoas = pessoas.map(element => {
    const registro = {};
    registro.nome = element;
    registro.empresa = 'Trybe';
    return registro;
})

console.log(novasPessoas);

// O map serve bastante para unir dois arrays em um só
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
    { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]