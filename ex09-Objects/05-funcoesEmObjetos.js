//Além das propriedades, dar um comportamento ao objeto 
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
    ],
    saldo: 2600,
    depositar: function(valor){
        this.saldo += valor;
    }
  }

//Mostrar saldo da Márcia
console.log(cliente.saldo);
cliente.depositar(400);
console.log(cliente.saldo);