// JSON.stringify() -> transforma um dado em uma string JSON 
// JSON.parse() -> converte essa string de volta para o formato original
// Usamos essas funçoes no local/session Storage caso os dados estejam em formato de objeto ou array
// Não utilizamos quando os dados estão em formato de string

const pessoa = {
    nome: 'Augusto',
    idade: 24
}

//Transformar o objeto em string 
const augusto = JSON.stringify(pessoa);
console.log(augusto)

//Converter essa string de volta para o formato original
console.log(JSON.parse(augusto))

//Colocar um item no localStorage
/*
    localStorage = {
        myData: {
            nome: 'Augusto',
            idade: 24
        }
    }
*/
localStorage.setItem('myData', augusto);

//Recuperar o objeto colocado na chave 'myData' no localStorage, que estava em formato de string
const recoveredObject =  JSON.parse(localStorage.getItem('myData'));

