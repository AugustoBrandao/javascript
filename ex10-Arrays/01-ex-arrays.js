// CRIE UMA FUNÇÃO QUE RECEBE O NOME DE UM ALUNO
// VERIFIQUE SE O ALUNO ESTÁ PRESENTE NA LISTA E RETORNE A MÉDIA FINAL QUE SE ENCONTRA NO MESMO ÍNDICE
// CASO O NOME DO ALUNO NÃO ESTEJA NA LISTA, RETORNE UMA MENSAGEM INDICANDO QUE O ALUNO NÃO FOI ENCONTRADO


const alunos = [
    ["Augusto", "Márcia", "Paulo", "Victória", "Fernando", "Amanda"],
    [7,5,10,9.5,9,6]
];

function exibeNomeNota(nome)
{
    if(alunos[0].includes(nome))
    {
        let indice = alunos[0].indexOf(nome);
        return 'Nome: '+ alunos[0][indice] + ' - Media -'+ alunos[1][indice];
    }else{
        return "Aluno não cadastrado"
    }
}

console.log(exibeNomeNota("Augustos"));


var acc = 0;

/*
//Calcular média
for(let i=0; i < alunos[1].length; i++)
{
    acc = acc + alunos[1][i];
    console.log(`${alunos[0][i]} - ${alunos[1][i]}`)
}
*/

alunos[1].forEach((item)=>{
    acc = acc + item;
});

console.log(`Média Final: ${acc/alunos[1].length}`);

