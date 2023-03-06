//Copia os valores de todas as propriedades de um ou mais objetos para um objeto-destino

//EXEMPLO - PARÂMETROS
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

//EXEMPLO - PRÁTICO 
let pessoa = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

let info = {
  age: 23,
  job: 'engenheiro',
};

let family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(pessoa, info, family)
console.log(pessoa)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23, //ACONTECE QUANDO HÁ PROPRIEDADES REPETIDAS ENTRE O OBJETO-DESTINO E OS OBJETOS PASSADOS POR PARÂMETRO, DE MODO QUE A PROPRIEDADE DO OBJETO-DESTINO SEMPRE UTILIZARÁ O ÚLTIMO VALOR DISPONÍVEL.
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

//O VALOR REPASSADO PELO OBJECT.ASSIGN É O PRÓPRIO OBJETO DE DESTINO
//NO EXEMPLO ABAIXO, TANTO A VARIÁVEL QUANTO O OBJETO RECEBERAM A PROPRIEDADE lastName
let person = {
  name: 'Roberto',
};

let lastName = {
  lastName: 'Silva',
};

let clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//COMO É POSSÍVEL MUDAR OS DADOS DO NOVO OBJETO SEM MODIFICAR O OBJETO INICIAL?
//Uma alternativa é passar como primeiro parâmtero do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável
let p = {
  name: 'Roberto',
};

let s = {
  lastName: 'Silva',
};

let newPerson = Object.assign({}, p, s);
newPerson.name = 'Gilberto';          //Somente o objeto newPerson será modificado
console.log(newPerson);
console.log(person);