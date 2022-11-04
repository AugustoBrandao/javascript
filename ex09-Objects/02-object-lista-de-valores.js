const objPessoa = {
    nome: "Augusto",
    idade: 23,
    cpf: "456.039.238-22",
    email: "augustobrandao.99@outlook.com",
    fones: ["+55 (11)97327-4254","+55 (11)95286-8397" ]
 }

 //Percorrer Array dentro do ObjPessoa
 objPessoa.fones.forEach(item => console.log(item));