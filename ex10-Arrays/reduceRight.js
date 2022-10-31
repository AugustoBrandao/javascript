//reduceRight() - Funciona da mesma forma que o reduce()
//Começa do final do array e segue até o início
const alphabet = ["a","b","c","d","e"];

//Reduce
const reduceAlphabet = alphabet.reduce((acc, item)=>{
    console.log(acc+ '/' +item);
    return acc + item;
}, 0);

//ReduceRight
const reduceRightAlphabet = alphabet.reduceRight((acc, item)=>{
    console.log(acc+ '/' +item);
    return acc + item;
}, 0);


