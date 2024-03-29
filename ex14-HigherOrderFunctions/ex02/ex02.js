const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1922,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = (books) => {
    let author = books.find(item => item.author.birthYear == 1947);
    return author.author.name;
}

// Retorne o nome do livro com menor número de caracteres (menor nome)
const smallerName = (books) => {
  let nameBook = books[0].name;

  books.forEach((element) => {
    if (element.name.length < nameBook.length){
        nameBook = element.name;
    }
  }); 
  
  return nameBook;
}

//Encontre o primeiro livro cujo nome possua 26 caracteres.
const getNamedBook = (books) => {
   return books.find(item => item.name.length == 26)
}

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX(books) {
    return books.every(item => item.author.birthYear >= 1900);
}

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = (books) => {
    return books.some(item => item.releaseYear >= 1980 && item.releaseYear < 1990)
}

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = (books) => {
    let bornYears = [];
    let sameYear = false;

    books.forEach(element => bornYears.push(element.author.birthYear)); 

    for (let i = 0; i < bornYears.length; i++) {
        for (let j = i + 1; j < bornYears.length ; j++) {
            if (bornYears[i] == bornYears[j]) {
                sameYear = true;
            }
        }
    }
    return sameYear;
}

console.log(authorUnique(books));