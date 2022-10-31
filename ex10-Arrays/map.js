// Adicionar pontos no array de notas
const notas = [10, 9, 8, 7, 6];

/*Podemos percorrer um array com:
    - For
    - Foreach
    - Map
*/

//Com for -> i=item
for(const i of notas){
    console.log(i);
}

//Foreach - não é possível fazer um retorno, fica como undefined
notas.forEach( item =>{
    console.log(item);
});

//Map - é possível fazer um retorno
//Transforma o array em outra informação em um novo array
const novoArray = notas.map(item =>{
    if(item != 10){
        return item +1;
    }else{
        return item;
    }
});

console.log(novoArray);

//Padronizar lista de alunos para conter apenas letras maiúsculas
const nomes = ["ana Julia", "Caio vinicius", "Bia silva"];

//Padronizar no array original
for(let i = 0; i < nomes.length; i++){
    nomes[i] = nomes[i].toUpperCase();
}

//Padronizar em um novo array
var nome = nomes.map(item => {
    return item.toUpperCase()
});

console.log(nomes);
console.log(nome);