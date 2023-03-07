//reduce() - reduzir meu array há algo
//Pegar um array e criar uma nova estrutura de dados com base nele
const numbers = [1,2,3,4,5,6,7,8,9,10];

//SOMAR TODOS OS ITENS DO ARRAY NUMBERS

/* 1 parametro = função que recebe duas informações:
                    * objeto que estou criando (accumulator - acc)
                    * e cada item do array (item)
*/

//2 parametro: qual é o valor inicial dessa nova estrutura de dados -> iniciando do 0
const soma = numbers.reduce((acc, item)=>{
    console.log(acc+ '/'+ item);
    return acc + item;
}, 0);

console.log(soma);

//Somar quantidade de lançamentos de foguete de todos os países

//Array de objetos
const lancamento = [
    { country: "Russia", launches: 12 },
    { country: "United States", launches: 11 },
    { country: "Brazil", launches: 2 },
];

const totalLancamentos = lancamento.reduce((elementoAnterior, item)=>{
    return elementoAnterior + item.launches;
}, 0);

//console.log(totalLancamentos);
