// Caso a função não receba um parâmetro ela fica como undefined
// Com o recurso de Default Parameter do ES6, podemos adicionar um valor padrão ao parâmetro que ficaria como undefined
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome pessoa usuária!
