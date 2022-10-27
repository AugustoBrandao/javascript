//Foreach(() => {return}) - Para cada item, executamos uma ação

const numbers = [1,2,3,4,5,6,7,8,9,10];

//primeiro parâmetro: item
numbers.forEach(item => {
    if(item % 2 == 0){
        console.log(`${item} : PAR`)
    }else{
        console.log(`${item} : ÍMPAR`);
    }
});

//Segundo parâmetro Index do item atual
numbers.forEach((item, index) => {
    if(item % 2 == 0){
        console.log(`${item} : PAR - INDEX ${index}`)
    }else{
        console.log(`${item} : ÍMPAR - INDEX ${index}`);
    }
});

//Terceiro parâmetro: Array que está sendo interado
numbers.forEach((item, index, array) => {
    if(item % 2 == 0){
        console.log(`${item} : PAR - INDEX ${index}`)
    }else{
        console.log(`${item} : ÍMPAR - INDEX ${index}`);
    }
    console.log(`ARRAY ${array}`);
});