
// filter() - Filtra um array de acordo com uma condição
// Pode receber três parâmetros (elemento, indice, array);

const arrayNomes = ["Augusto", "Victoria", "Márcia", "Paulo"];

const arrayFiltro = arrayNomes.filter((item)=> item.length > 6); //É necessário salvar em um novo array

console.log(arrayFiltro);


//Filtrar apenas os alunos reprovados
const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7,4.5,8,7.5]

const reprovados = nomes.filter((nome, indice) => notas[indice] < 6 );
console.log(reprovados)

// EXEMPLO - ARRAY DE OBJETOS
const notaEstudantes = [
    {
        nome: 'Augusto',
        nota: 80
    },
    {
        nome: 'Victoria',
        nota: 97
    },
    {
        nome: 'Márcia',
        nota: 65
    },
    {
        nome: 'Paulo',
        nota: 100
    }
];

let aprovados = notaEstudantes.filter((item) => item.nota >= 80);
let naoAprovados = notaEstudantes.filter((item) => item.nota < 80);
console.log('Aprovados: ' + JSON.stringify(aprovados) + 'Reprovados: ' + JSON.stringify(naoAprovados));