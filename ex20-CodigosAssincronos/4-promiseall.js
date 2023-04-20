// Recebe como parâmetro um array de promises
// Quando todas promises são resolvidas: retorna uma promise resolvida com um array com o resultado de cada promise recebida.
// Quando uma promise é rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise que foi rejeitada.
// Atenção ⚠️: mesmo que uma das promises seja rejeitada, os códigos das outras ainda serão executados.

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


Promise.all([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));