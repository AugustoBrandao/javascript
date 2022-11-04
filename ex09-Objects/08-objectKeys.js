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

//Percorrer um objeto, verificar se a chave dependentes existe
//Enviar uma mensagem de oferta de seguro

//Object.keys = retorna todas as propriedades do objeto em um array
const propsClientes = Object.keys(cliente);
console.log(propsClientes);

//Object.values = retorna todas os valores do objeto em um array
const valoresCliente = Object.values(cliente);
console.log(valoresCliente);

//Object.entries = retorna todas chaves e valores do objeto em arrays separados
const valoresEmArrays = Object.entries(cliente);
console.log(valoresEmArrays);
