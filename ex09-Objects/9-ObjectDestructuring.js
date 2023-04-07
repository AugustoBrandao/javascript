// Mais uma forma de acessar o valor de um objeto
const livro = {
    autor: 'David Flanagan',
    tema: 'JavaScript',
    ano: '2012',
    editora: 'Bookman'
};

//Acessar uma chave por notação de ponto
console.log(livro.autor);

//Acessar uma chave por object destructuring
const { autor } = livro
console.log(autor);

// extrair todos os dados do objeto
const { tema, ano, editora } = livro;
console.log(`O livro de ${ tema } da editora ${editora}, foi escrito pelo ${autor} no ano de ${ano}`);

// OBJECT DESTRUCTURING QUANDO HÁ OBJETOS DENTRO DO OBJETO
const livroJavaScript = {
    autor: { nome: 'Augusto Brandão', nascimento: 1999, formacao: 'Sistemas para Internet' },
    tema: tema,
    ano: { primeiraEdicao: 2019, segundaEdicao: 2021 }
}

// Acessando por notação de ponto
console.log(livro.autor.nome);

const {
    autor: {
        nome,
        nascimento,
        formacao
    },
    ano: {
        primeiraEdicao,
        segundaEdicao
    },
} = livroJavaScript;

const textApresentation = `O professor ${nome}, formado em ${formacao} prublicou seu primeiro livro em ${primeiraEdicao}`
console.log(textApresentation);

// Atribuir o valor de uma propriedade à uma variável
const curso = tema;
const escola = editora;

// EXERCÍCIO ------------------------------------------------------------------------------------------------------------------------ //

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
const terceiroObjeto = { ...user, ...jobInfos };
const { name: apelido, age: idade, nationality: nacionalidade, profession: profissao, squad, squadInitials } = terceiroObjeto;
console.log(`i, my name is ${apelido} a, I'm ${idade} years old and I'm ${nacionalidade}. I work as a ${profissao} and my squad is ${squadInitials} ${squad}`);