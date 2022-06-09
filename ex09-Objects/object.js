 
//Object creation
let amigo = {
    nome:'Augusto', 
    sexo:'M', 
    altura:'1.91', 
    a(n=0){ return n*100 }
}

var função = amigo.a(1)
console.log(`${amigo.nome} ${função}`)