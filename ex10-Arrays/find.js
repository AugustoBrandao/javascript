
// find() - Serve para encontrar apenas UM item desse array
// Encontra o primeiro item que satisfaça a condição

const arrayNumber = [1,2,3,4,5,6];
const primeiroNumeroPar = arrayNumber.find(item => item % 2 == 0); //2
const primeiroNumeroImpar = arrayNumber.find(item => item % 2 != 0); //1

console.log(arrayNumber);
console.log(`Primeiro Número Par: ${primeiroNumeroPar}`);
console.log(`Primeiro Número Ímpar: ${primeiroNumeroImpar}`);


// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

const musica = musicas.find(item => item.id === '31031685');
console.log(musica);



  

