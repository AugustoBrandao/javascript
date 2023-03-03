//Arrow function
const verificaIdade = idade => (idade >=18) ? 'Pode dirigir' : 'Não pode dirigir';
console.log(verificaIdade(18)); //Pode dirigir
console.log(verificaIdade(21)); //Pode dirigir
console.log(verificaIdade(16)); //Não pode dirigir


//(condição) ? verdadeiro : falso;
//Somente usado em duas saídas possíveis
//Serve como if/else que pode ser armazenada em uma variável
