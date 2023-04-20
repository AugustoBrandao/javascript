// Retorno: retorna uma única promise que é resolvida quando todas as promises passadas forem finalizadas. A promise é retornada com um array de objetos que contém o valor retornado por cada uma das promises originais.

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

Promise.allSettled([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));