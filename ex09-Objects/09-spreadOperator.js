//Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única
//Vamos utilizar Spread Operator

//Lista com objetos
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

//Pegar os objetos de dependentes e colocou em um novo array
const listaDependentes = [...cliente.dependentes]
console.table(listaDependentes);

//Juntar 2 objetos com propriedades diferentes
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const warrior = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(warrior)

//Juntar 3 objetos com propriedades iguais
const mago = {
    nome: "Gandalf",
    classe: "mago"
}
   
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...guerreiro, ...ranger }
//Vai sobrescrever 
console.log(personagens) //{ nome: 'Legolas', classe: 'ranger' }