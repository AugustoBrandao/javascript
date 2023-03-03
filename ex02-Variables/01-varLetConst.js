var variavel = 'variavel';               //Não recomendado -> Mas serve como uma variável global
let variable = [];                      //Executada apenas dentro do bloco
const numbers = [0,1,2,3,4,5,6,7,8,9]; //Constante, não pode ser mudada

//Mas o const permite a alteração de objetos e arrays
const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
};
  
userInfo.name = 'João';
console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
