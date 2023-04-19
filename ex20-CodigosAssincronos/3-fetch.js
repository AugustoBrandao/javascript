// Necessário para que uma aplicação consiga se comunicar com outras aplicações através de APIs
// Usado para fazer requisições de APIs

//O retorno de um fetch é uma promise, ou seja, é uma requisição assíncrona
//Espera a resposta do servidor
fetch("https://api.goprogram.ai/inspiration")
    .then( response => response.json()) /*acesso a resposta do servidor, o .json retorna uma promise, por isso faremos um outro then */
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
