// A função some retorna true se ao menos um elemento de um array satisfaz a uma condição

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];
  
const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
console.log(verificaCargo); // true

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

//Agora imagine que você precise verificar se existe algum nome que comece com a letra desejada. Analise e execute o código abaixo:
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false