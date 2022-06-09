//array.length()-> tamanho do array nome
//array.push(7) -> colocar o 7 na última casa
//array.sort() -> colocar os elementos em ordem crescente
//array.indexOf(7) -> pesquisar o elememto 7 dentro do array

var nome = []
var idade = []
var sexo = []

opcao = 0

while(opcao != 0){
    console.log('Nome: ')
    console.log('Sexo: ')
    console.log('Idade: ')
    console.log('[0] Continuar | [1] Sair')
}

//var i=0; i < nome.length(); i++
for(var i in nome)
{
    console.log(`Nome: ${nome[i]} | Idade: ${idade[i]} | Sexo: ${sexo[i]}`)
}