const firstNumber = 9;
const secondNumber = 1;

setTimeout(() => {
    let thirdNumber = firstNumber + secondNumber;
    console.log(thirdNumber);
}, 5000) //carregar em 5 segundos

thirdNumber = firstNumber - secondNumber;
console.log(thirdNumber);