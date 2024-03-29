//O Javascript permite que a gente crie, leia e delete cookie através da propriedade document.cookie.

//Criar cookie
document.cookie = 'chave=valor';

//O cookie é deletado quando fechamos o navegador
//Para isso não acontecer, é necessário adicionar uma data para expiração: 
document.cookie = 'chave=valor; expires=Mon, 13 Mar 2023 12:00:00 UTC'

//Você pode adicionar também o parâmetro path, que dirá ao navegador a qual caminho o cookie que você criou pertence. 
//Por padrão, o cookie pertence à página atual.
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

//O Javascript permite que você atribua document.cookie a uma variável
//Assim, você conseguirá ler as informações que estão armazenadas.
//No exemplo abaixo, ao imprimirmos no console o valor de myCookie, 
//o que será retornado é uma string contendo o nome e o valor do cookie.
//Quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com

//E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.
document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

//Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:
document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'
