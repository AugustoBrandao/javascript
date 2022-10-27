
// find() - Serve para encontrar apenas UM item desse array
// Encontra o primeiro item que satisfaça a condição

const arrayNumber = [1,2,3,4,5,6];
const primeiroNumeroPar = arrayNumber.find(item => item % 2 == 0);
const primeiroNumeroImpar = arrayNumber.find(item => item % 2 != 0);

console.log(arrayNumber);
console.log(`Primeiro Número Par: ${primeiroNumeroPar}`);
console.log(`Primeiro Número Ímpar: ${primeiroNumeroImpar}`);
