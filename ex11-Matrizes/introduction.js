//Matrizes possuem 2 arrays dentro dela

const familia = ['Paulo','Márcia','Victória', 'Augusto'];
const salarios= [20000, 3500, 15000,2600];

let juncao = [ familia, salarios];

console.log(`NOME: ${juncao[0][0]} | SALARIO: ${juncao[1][0]}`);

//NOTAÇÃO
//array[array][valor]

//juncao[0][0] - ARRAY 0 (PRIMEIRO ARRAY), VALOR 0
//juncao[1][0] - ARRAY 1 (SEGUNDO ARRAY), VALOR 0
//juncao[1][1] - ARRAY 1, VALOR 1
