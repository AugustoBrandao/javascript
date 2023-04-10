// a chave e o valor são iguais aos parâmetros passados, isso evita repetições no código
// Veja um exemplo: 

// ISSO
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

// É IGUAL À ISSO 
const novoUsuario = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
console.log(novoUsuario(54, 'isabella', 'isabella@email.com'));
