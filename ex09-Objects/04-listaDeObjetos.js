const objPessoa = {
    nome: "Márcia",
    idade: 52,
    cpf: "101.049.788-05",
    email: "marcialucilia@yahoo.com.br",
    fones: ["+55 (11)97327-4254","+55 (11)95286-8397" ],
    dependentes: [{
        nome: "Victória Brandão",
        parentesco: "Filha",
        dataDeNascimento: "22/12/1996"
    }]
 }

 //Adicionar mais um dependente
 //Transformar dependentes em um array de objetos e adicionar mais um dependente utilizando o método push
 objPessoa.dependentes.push({
    nome: "Augusto Brandão",
    parentesco: "Filho",
    dataDeNascimento: "14/01/1999"
 });

 console.log(objPessoa);

 //Verificar o mais novo
 var acc = 0
 objPessoa.dependentes.forEach(item =>{
    let result = Number(item.dataDeNascimento.slice(6));
    
    if( acc == 0){
        acc = result;
    }else if(acc > result){
        acc = result;
    }
 })

 console.log(`O ano de nascimento do mais velho é ${acc}`);