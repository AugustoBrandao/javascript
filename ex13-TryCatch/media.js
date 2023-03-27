const verifyMedia = (number1, number2, number3, number4) => {
  try {
    verifyNumbers(number1, number2, number3, number4);
    return (number1 + number2 + number3 + number4) / 4;
  } catch (error) {
    return error.message;
  }
}

function verifyNumbers(number1, number2, number3, number4) {
  let numbers = [number1, number2, number3, number4];
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] != 'number') {
      throw new Error('Tipo de dado incorreto no ' + i + ' elemento');
    }
  }
}

console.log(verifyMedia(1,2,3,'4'));