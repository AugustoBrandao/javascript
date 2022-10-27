// findIndex() - Retorna o índice do primeiro valor que atenda as condições
const arrayNumber = [1,2,3,4,5,6];
const primeiroNumeroPar = arrayNumber.findIndex(item => item % 2 == 0); //1

console.log(primeiroNumeroPar);