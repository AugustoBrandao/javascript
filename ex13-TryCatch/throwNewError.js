//Para tratar erros em um código JavaScript, precisa-se do fluxo de exceção. 
//Para isso, pode-se interromper o funcionamento do código e lançar um erro por meio do throw new Error, que cria e lança um objeto de erro. 
//Veja o exemplo a seguir:

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };

// A palavra reservada throw serve para lançar uma exceção. No caso, foi definido que essa exceção deveria acontecer caso algum parâmetro não fosse do tipo number, então foi criado esse “erro customizado”. 
// Caso contrário, a função sum apresentaria um comportamento incorreto, pois não realizaria a soma dos valores corretamente.
// O operador new serve para criar um objeto personalizado ou nativo do JavaScript.
// A palavra Error é um objeto nativo do JavaScript que representa um erro. 
// Quando você o chama com o operador new, é criada uma cópia desse objeto, a qual será lançada como uma exceção no seu código

//Enquanto o try tenta executar o código com sucesso, o catch é executado caso um erro seja lançado.
const sum = (value1, value2) => {
    try { // o `try` vai executar a função verifyNumber e retornar a soma, caso os parâmetros sejam números
        verifyIsNumber(value1, value2);
        return value1 + value2;
    // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada por meio da propriedade `.message` nativa do objeto Error.
    } catch (error) { 
        return error.message;
    }
};

console.log(sum(2, '3'));