//EXERCÍCIO 1
let algarismosRomanos = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}

//Esse algoritmo possui uma limitação por conta de alguns caracteres romanos
function recebeAlgarismosRomanos(numeroRomano) {
  let arrayNumero = numeroRomano.split('');
  let numeroNormal = [];
  let contador = 0;

  //Número Romano em unidades/dezenas
  for (let i = 0; i < arrayNumero.length; i++) {
    numeroNormal.push(algarismosRomanos[arrayNumero[i]]);
  }

  //Se o número seguinte for maior, o número se tornará negativo
  for (let i = 0; i < numeroNormal.length; i++) {
    if (numeroNormal[i + 1] > numeroNormal[i]) {
      numeroNormal[i] = numeroNormal[i] * -1;
    }
  }

  //Somar cada elemento do array numeroNormal
  for (let i = 0; i < numeroNormal.length; i++) {
    contador += numeroNormal[i];
  }
  return contador;
}

console.log(recebeAlgarismosRomanos('CMLXXXVIII'))
