//splice()
/*
    - adiciona novos itens no array.
    - remove itens do array

    PRIMEIRO parâmetro especifica em que posição deve adicionar/remover itens
    SEGUNDO parâmetro define o número de itens a serem removidos
    O restante dos parâmetros definem os novos itens a serem adicionados
*/

//Adicionar fruta Jaca no primeiro item
var frutas = ["Banana", "Maçã", "Morango", "Limão", "Laranja", "Mamão", "Uva", "Pêra"];
frutas.splice(0,0,"Jaca", "Teste");
console.log(frutas);

//Remover Jaca e Teste
frutas.splice(0,2);
console.log(frutas);