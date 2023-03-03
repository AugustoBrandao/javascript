//Função Anônima
const funcao = function (a,b){ return a + b; }

//Arrow Function - 1 linha de código
const ehPar = a => a % 2 == 0;         //um parâmetro: pode omitir os parênteses
const arrowFunction = (a,b) => a + b; //dois parâmetros
const soma = (num1 , num2) => num1 + num2;//dois parâmetros


//Arrow Function - com duas ou mais linhas de código
const somaNumerosPequenos = (num1, num2) =>{
    if(num1 > 10 || num2 > 10){
        return "Somente números de 0 à 10"
    }else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1,1))

//O objeto numa arrow function deve estar dentro de ()
const criaObjeto = (nome, sobrenome, idade) => ({
    nome: nome, 
    sobrenome: sobrenome,
    idade: idade
})

console.log(criaObjeto('Augusto','Brandão', 24))
