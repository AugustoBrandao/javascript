// quando alguma promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original, ignorando qualquer outra promise que tenha sido finalizada primeiro como rejeitada.
// quando todas as promise forem rejeitadas: retorna uma promise rejeitada com o objeto contendo todos os erros retornados pelas promises originais.
//Atenção ⚠️: mesmo que Promise.any só receba o valor da primeira promise a ser realizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.

// cria uma promise que será sempre resolvida
const generateResolvedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
      resolve(
        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
      );
    }, timer);
  });


Promise.any([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));