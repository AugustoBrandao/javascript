// Isso significa que as promises são usadas para lidar com códigos assíncronos, ou seja, aqueles códigos que serão executados fora do fluxo sequencial da aplicação. Esses códigos, em geral, costumam demorar para finalizarem sua execução, e esse tempo pode variar entre poucos milissegundos até minutos em casos mais extremos.

// Uma promise pode ter três estados:
// - pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término da execução do código assíncrono;
// - fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. Também é comum dizer que quando a promise está nesse estado ela está resolvida;
// - rejected (rejeitada): quando a operação assíncrona termina com algum erro.

// Para lidarmos com o retorno assíncrono, a promise tem dois métodos: o then para tratarmos o caso de sucesso e o catch para tratar o caso de falha.

// Função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// Se o número aleatório for par, a promise será resolvida
// Se for ímpar, ela será rejeitada
const randomPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        //Condicional para ser resolvida ou rejeitada
        if(randomNumber % 2 == 0){
            resolve(randomNumber);
        } else {
            reject(new Error(`O número ${randomNumber} é ímpar. Somente números pares são resolvidos`))
        }
    }, 1000)
});

//Pegar o retorno da função assíncrona caso seja resolvido ou rejeitado
randomPromise()
    .then( response => {
        console.log(`[RESOLVIDO] O número ${response} é par.`);
    })
    .catch( error => {
        console.log(`[REJEITADO] ${error.message} `);
    })
    .finally(() => console.log('Função assíncrona executada')); // independentemente se ela foi resolvida ou rejeitada
