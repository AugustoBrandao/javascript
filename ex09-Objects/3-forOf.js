//Tem uma aplicação bem semelhante com o que foi visto no for/in, mas com uma diferença crucial
//O for/of não pode ser usado em objetos
let food = ['hambúrguer', 'bife', 'acarajé'];

for (let value of food) {
  console.log(value);
};
//resultado: hambúrguer, bife, acarajé;
