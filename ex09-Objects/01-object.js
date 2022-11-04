 //OBJETOS - Formado por chave e valor de diferentes tipos
 const objPessoa = {
    nome: "Augusto",
    idade: 23,
    cpf: "456.039.238-22",
    email: "augustobrandao.99@outlook.com"
 }

 //Acessando o objeto com notação de ponto
 console.log(`Meu nome é ${objPessoa.nome} e eu tenho ${objPessoa.idade} anos`)
 

 //Acessando dados com colchetes com notação
 const chaves = ["nome", "idade", "cpf", "email"];
 console.log(objPessoa[chaves[0]]);
 console.log(objPessoa["nome"]);

 //Percorrendo o objPessoa
 chaves.forEach((_,index) => console.log(objPessoa[chaves[index]]));

 //Adicionando campos
 objPessoa.telefone = "(11) 97327-4254";
 console.log(objPessoa)

 //Alterando campos
 objPessoa.nome = "Augusto Brandão";
 console.log(objPessoa)

 //Deletando campo
 delete objPessoa.telefone;
 console.log(objPessoa);
 