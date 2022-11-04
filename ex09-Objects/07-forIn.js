const cliente = {
    nome: 'Márcia',
    idade: 52,
    cpf: '101.049.788-05',
    email: 'marcialucilia@yahoo.com.br',
    fones: [ '+55 (11)97327-4254', '+55 (11)95286-8397' ],
    dependentes: [
      {
        nome: 'Victória Brandão',
        parentesco: 'Filha',
        dataDeNascimento: '22/12/1996'
      },
      {
        nome: 'Augusto Brandão',
        parentesco: 'Filho',
        dataDeNascimento: '14/01/1999'
      }
    ]
  }

let relatorio = " "

//Pegar todas as chaves do objeto
for(let chave in cliente)
{
    relatorio += ` ${chave}`
}

console.log(relatorio)

let rell = " ";

//Pegar todos os valores do objeto
for(let chave in cliente)
{
    rell += ` ${cliente[chave]}`
}

console.log(rell)



//Pegar os objetos internos do objeto
var r = " ";
var obj = "";

for(let chave in cliente){

    if(typeof cliente[chave] === "object"){
        cliente[chave].forEach(item => {
            obj += `| 
            ${String(JSON.stringify(item))} |
            `
        });
    }else{
        r += `| ${chave} : ${cliente[chave]} |`
    }
}

console.log(r);
console.log(obj)

