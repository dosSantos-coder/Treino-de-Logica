/*alert("Olá, Hello Word !!") Primeiro codigo em JavaScript!! Agora quero ver o php do homi kkkkk*/

/*variaveis e concatenação
var idade = "35"
var nome = "maria"*/
/*caixa de texto tipo conole.log
console.log ('olá, ' + nome + ' eu fiquei sabendo que você tem ' + idade + ' anos de idade.')*/

/*alert cria uma caixa de texto no topo da pagina executavel e com o tempo posso usala para passar uma mensagem de erro.(If e else)
alert ('olá, ' + nome + ' eu fiquei sabendo que você tem ' + idade + ' anos de idade.')
*/

/* Desafio de logica
var a = 10
var b = 20
var c = null*/

/*document.write ('a: ' + a + )
document.write ('b: ' + a + )
document.write ('c: ' + a + )*/

//Use Strict reduz erros silenciosos no script
'use strict'

//Calculo de idade
var idade = prompt('Digite a sua idade:')

idade = parseInt(idade)

if( idade <= 15){
    document.write('Criança')
}
if(idade >= 15 && idade <=30){
    document.write('Jovem')
}
if(idade >=30 && idade <= 60){
    document.write('Adulto')
}
if(idade >= 60){
    document.write('Idoso')
}
