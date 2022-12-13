const pessoa = {
    nome: "Augusto",
    sobrenome: "Brandão",
    links: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        site: "https://site.com"
    }
}

// DESESTRUTURAR
// Tirar valor primitivo ou uma estrutura de dados de dentro de outra estrutura (objeto ou array)
const { nome: name, sobrenome } = pessoa
console.log(name +" "+ sobrenome)

//Pegando o último item do objeto links
const { site } = pessoa.links;
console.log(site)

