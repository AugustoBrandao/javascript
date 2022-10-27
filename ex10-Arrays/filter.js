
// filter() - Filtra um array de acordo com uma condição

const arrayNomes = ["Augusto", "Victoria", "Márcia", "Paulo"];

const arrayFiltro= arrayNomes.filter(item => item.length > 6); //É necessário salvar em um novo array

console.log(arrayFiltro);