// Async/await são uma forma alternativa para se usar além do then
// Async serve para mostrarmos que a função lida com código assíncrono
// Quando colocamos o operador await no JavaScript, a execução do código é pausada até que a referida Promise seja resolvida. Isso significa que o código não será executado além daquela linha enquanto a Promise estiver pendente.



const API_URL = `https://dummyjson.com/quotes/random`;

function requisicaoUsandoThen(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.quote))
        .catch(error => console.log(error.message));
}

// async indica que a função lida com códigos assíncronos
async function requisicaoSimplificada(url) {
    try {
        const response = await fetch(url); // await -> espera que o retorno do fetch é assíncrono
        const data = await response.json();
        console.log(data.quote);
    } catch(error) {
        console.log(error.message)
    }
}

requisicaoUsandoThen(API_URL)
console.log(requisicaoSimplificada(API_URL));