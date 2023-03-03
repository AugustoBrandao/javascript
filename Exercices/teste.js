//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
let recebeFrase = (frase) => { 
    const arrayPalavras = frase.split(' ').sort((a,b)=> b.length - a.length)[0]; 
    return arrayPalavras;
}

console.log(recebeFrase('Antônio foi ao banheiro e não sabemos o que aconteceu'))