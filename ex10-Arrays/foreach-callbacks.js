//Foreach(() => {return}) - Para cada item, executamos uma ação, sem retorno nenhum
//Por exemplo, o forEach executa uma determinada ação para cada item do array e não retorna nada.

//ARRAY
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

let exibirListaEmail = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach((elemento, index, array) => {
    exibirListaEmail(elemento);
    console.log(`Você foi o email número ${index} a ser cadastrado num total de ${array.length} emails\n`);
});