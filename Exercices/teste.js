function substituaX(nome){
    let arrayFrase ='Tryber x aqui!'.split(' ');
    arrayFrase.splice(1,1,nome);
    
    let frase = arrayFrase.join(' ');
    return frase;
}

let fraseInicial = substituaX('Augusto');

function minhasSkills(fraseInicial){
    const skills = ['HTML5', 'CSS3', 'JavaScript'];
    let frase = `
    ${fraseInicial}
    Minhas três principais habilidades são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}`;

    return frase;
}

console.log(minhasSkills(fraseInicial));

