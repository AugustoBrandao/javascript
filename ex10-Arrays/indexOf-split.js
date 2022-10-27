// IndexOf() - Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array
// Caso o elemento não exista, ele retorna um -1

const stringVar = "Aprendendo JavaScript na Internet com JavaScritp";

//Quebra uma string em um array com cada palavra separada em um item
const palavras = stringVar.split(" ");
console.log(palavras);

const posicao = palavras.indexOf("JavaScript");

console.log(posicao);