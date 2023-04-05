//reduce() - reduzir meu array há algo
//Pegar um array e criar uma nova estrutura de dados com base nele
// Diferente das outras HOFs, o reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).

const array = [1,2,3,4,5,6,7,8,9,10];
array.reduce(callback, valorInicial); // estrutura inicial do reduce

// O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.
/*
    Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:
        1- Acumulador (acc): que é o valor que vai ser acumulado a cada iteração;
        2- Valor atual (curr): que é o valor atual do item, a ser adicionado no acumulador;
        3- Index atual: que é o index do item que está sendo iterado naquele momento;
        4- Array: que é o array original.
*/

array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial); // estrutura completa do reduce

const soma = array.reduce((acc, curr) => acc + curr, 0);

console.log(soma);


