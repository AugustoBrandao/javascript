//slice - Copia uma parte de um array/ou string para outro array/string
//Se for um array, retorna um array...
//Se for uma string, retorna uma string

const frutas = ["Maçã", "Banana", "Melancia", "Acerola", "Limão", "Laranja"];

var resultado = frutas.slice(2,5); // Inicia do 2 e vai até a posição 5
console.log(resultado);

const fruta = "Fruta";
var result = fruta.slice(1); //começa uma casa à frente - ruta
console.log(result);
