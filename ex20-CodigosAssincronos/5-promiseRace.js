// Recebe como parâmetro um array de promises
// Quando a primeira promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original.
// Quando a primeira promise finalizada for rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise original.
// Atenção ⚠️: mesmo que Promise.race só receba o valor da primeira promise a ser finalizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.

// função que gera número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

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


Promise.race([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));