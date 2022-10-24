//Função Anônima
const funcao = function (a,b){ return a + b; }

//Arrow Function - 1 linha de código
const arrowFunction = (a,b) => a + b; //um parâmetro
const soma = (num1 , num2) => num1 + num2;//dois parâmetros


//Arrow Function - com duas ou mais linhas de código
const somaNumerosPequenos = (num1, num2) =>{
    if(num1 > 10 || num2 > 10){
        return "Somente números de 0 à 10"
    }else{
        return num1 + num2;
    }
}