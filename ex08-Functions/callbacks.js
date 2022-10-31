const nomes = ["Augusto", "Victoria", "Márcia", "Paulo", "Fernando"];

//Não precisa passar item como parâmetro
//função callback
nomes.forEach(imprimeNomes);

function imprimeNomes(nome){
    console.log(nome);
}