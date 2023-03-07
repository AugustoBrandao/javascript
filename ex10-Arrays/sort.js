//Sort() - método para ordenação de arrays
//Não precisa salvar o resultado em uma nova variável

//Sort() - classifica os elementos em ordem alfabética crescente
var frutas = ["Banana", "Maçã", "Morango", "Limão", "Laranja", "Mamão"];
frutas.sort();  // Ordenar os elementos do array
console.log(frutas);

//Ordenar array por tamanho de caracteres
//Da palavra maior até a menor
frutas.sort((a, b) => b.length - a.length);
console.log(frutas);


//Buble Sort
var numeros = [5, 3, 6, 7, 8, 1, 2, 0, 9, 4];

function bubbleSort(array) {
    for (let i=1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                let position = array[i];
                array[i] = array[j];
                array[j] = position;
            }
        }
    }
    return array;
}

console.log(bubbleSort(numeros));