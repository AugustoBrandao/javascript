// O parâmetro rest é uma feature do ES6 que permite que você agrupe informações em um lugar só.

const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

//imagine que você precisa criar uma função que é responsável por somar a quantidade de produtos de um carrinho de compras. 
//Essa função pode receber vários números como parâmetros e deve realizar a soma de todos eles. Observe e execute o código abaixo:
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88