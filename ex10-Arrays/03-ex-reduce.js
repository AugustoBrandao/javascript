// EXERCÍCIO
//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala

const sala1 = [7,8,8,7,10,6.5,4,10,7];
const sala2= [6,5,8,9,5,6]
const sala3 = [7,3.5,8,9.5]
const mediaSalas = [];
const mediaGeral = mediaSalas.reduce((acc, item)=> acc + item / 3, 0)

function resultadosSalas(sala){
    const resultadoSalas = sala.reduce((acc, item) => acc + item / sala.length, 0);
    mediaSalas.push(resultadoSalas);
    return resultadoSalas.toFixed(2);
}

console.log(resultadosSalas(sala1));
console.log(resultadosSalas(sala2));
console.log(resultadosSalas(sala3));
console.log(`Média geral: ${mediaGeral}`)
console.log(mediaSalas);
