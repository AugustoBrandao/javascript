 // setTimeout(() => {} ); -> recebe uma função e executa em um tempo em milisegundos

 //Callback é uma função que será executada quando algo acabar
 function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        console.log(`
        Corpo: ${corpo}
        ----------------------------------
        Para: ${para}
        `)
        callback("ok",5,"8s");
    }, 3000);
 }

console.log("Início do envio de email")
enviarEmail("Olá, tudo bem?", "augustobrandao.99@outlook.com", (status, amount, time) => {
    console.log(`
        Status: ${status},
        Contatos: ${amount},
        Tempo: ${time}
    `);
})

 