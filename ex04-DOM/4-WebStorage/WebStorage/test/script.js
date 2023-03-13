// AGENDA PERSONALIZADA
//  - Vamos guardar o nome e o sobrenome de cada pessoa
//  - Quero saber quantas pessoas tenho dentro dessa agenda

//Retornar quantos itens temos no nosso localStorage
console.log(localStorage.length);

//Inserir uma pessoa na agenda
const augusto = {
    sobrenome: 'Brandão Barbosa',
    idade: 24,
    altura: 1.93,
    peso: 94
}

const victoria = {
    sobrenome: 'Brandão Barbosa',
    idade: 26,
    altura: 1.75,
    peso: 63
}

localStorage.setItem('chaveAugusto', JSON.stringify(augusto))
localStorage.setItem('Augusto', JSON.stringify(augusto));
localStorage.setItem('Victoria', JSON.stringify(victoria));

//Remover um objeto do localStorage
localStorage.removeItem('chaveAugusto')

//Mostrar todos os objetos armazenados no localStorage
console.log(localStorage);
console.log(Object.keys(localStorage));

//Recuperar o dado salvo no localStorage de String para Objeto
const recoveryObject = JSON.parse(localStorage.getItem('Augusto')); //Objeto
console.log(recoveryObject);

//Limpar tudo do localStorage
localStorage.clear()
