//Faça um programa que leia as notas de um matriz 3X4

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0
let acc = 0

//Varrer as três casas de notasGerais[0,1,2]
for( let i= 0; i < notasGerais.length; i++){

    //Varrer as casas de notasGerais[0][1,2,3,4]
   for(let j=0; j < notasGerais[i].length; j++){

    //Input direto do valor da média
    acc += notasGerais[i][j] / notasGerais[i].length;
   }
}

media = acc / notasGerais.length;

console.log(notasGerais)
console.log(media)
