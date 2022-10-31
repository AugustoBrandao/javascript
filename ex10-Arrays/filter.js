
// filter() - Filtra um array de acordo com uma condição

const arrayNomes = ["Augusto", "Victoria", "Márcia", "Paulo"];

const arrayFiltro= arrayNomes.filter((item)=> item.length > 6); //É necessário salvar em um novo array

console.log(arrayFiltro);


//Filtrar apenas os alunos reprovados
const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7,4.5,8,7.5]

const reprovados = nomes.filter((nome, indice) => notas[indice] < 6 );

console.log(reprovados)