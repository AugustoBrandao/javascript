let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

//criando uma nova chave
player.fullname = player.name + ' ' + player.lastName;
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//Acessando um valor através da notação de ponto
console.log('A jogadora ' + player.fullname + ' tem ' + player.age + ' anos de idade.');
//Acessando o valor através da notação de colchetes 
console.log('A jogadora ' + player['fullname'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');
//Notação de ponto
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata\n');

