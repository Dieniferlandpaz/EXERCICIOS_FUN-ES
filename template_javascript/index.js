
/*function minhaFuncao (variavel) {
    return variavel * 5
}
(minhaFuncao(2))
(minhaFuncao(10))*/

/*a) O que vai ser impresso no console?
primeiro console 10
segundo console 50 
/*b) O que aconteceria se retirasse os dois `console.log` 
e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
O que apareceria no console?
diz que nao tem função */

/*exercicio 2 
a. Explique o que essa função faz e qual é sua utilidade
// A função tolowercase() vai retornar tudo minusculo, e a includes irá retornar verdade se aparecer a palavra solicitada
ou falso se nao for encontrada.
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

     // todas as saidas são verdadeiras

     let textoDoUsuario = prompt ("Insira um texto");
const outraFuncao = function (texto) {
    return texto.toLowerCase().includes("cenoura")
}
const respota = outraFuncao(textoDoUsuario);
console.log(respota)

/*exercicio 3 
1. Escreva as funções explicadas abaixo:
    a) A função não deve receber nenhum parâmetro e
     deve imprimir uma mensagem falando algumas informações sobre você, como:
     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
     Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/

     /*function imprimaMensagem() {
        console.log("Meu nome é Dienifer, tenho 24 anos, moro em São leopoldo e sou estudande de javascript")
     }
imprimaMensagem();*/


/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), 
a idade (number), a cidade (string) e uma profissão (string). 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:*/

/*let nome = "Dienifer"
let idade = 24 
let cidade = "São Leopoldo"
let profissão = "Vendedora"

function imprimirtexto(){
    console.log("Meu nome é: " + nome + "tenho: " + idade + "moro na cidade de " + cidade + "e minha profissão é: " + profissão)

}
imprimirtexto()*/

/*EXERCICIO 4 
 Escreva as funções explicadas abaixO
    
    a) Escreva uma função que receba 2 números como parâmetros, e,
     dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e 
     imprima no console o resultado.*/
/*num1 = 5
num2 = 10
     function somaNum() {
    console.log(num1 + num2)
}
somaNum()*/ 
    
/*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
    /*é **maior ou igual** ao segundo.*/
/*num1 = 10
num2 = 5
function maiorOuIgual() { 
    console.log( num1 >= num2 )
}
maiorOuIgual()*/

    /*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/
   /* let numero = prompt("Digite um numero: ");
function numeroPar(){
    if (numero % 2==0){ 
    console.log ("seu numero é par!");
}
    else {
    console.log ("seu numero é impar!")
}
}
numeroPar()*/
/*d) Faça uma função que recebe uma mensagem (string) */
/*como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/
/*let texto = prompt ("Digite uma mensagem: ")
function mensagem(){
    console.log(texto.toUpperCase() + texto.length)
}
mensagem()*/

//exercicio 5 
/*Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário
 sendo o argumento.
 Por fim, mostre no console o resultado das operações:*/

function soma(n1,n2){
return n1 + n2
}
function subtração(n1,n2){
return n1 - n2
}
function multiplicação(n1,n2){
return n1 * n2
}
function divisão(n1, n2){
return n1 / n2
}
let somaDois = soma (2,3);
let subtraçãoDois = subtração(2,3);
let multiplicaçãoDois = multiplicação (2,3);
let divisãoDois = divisão (2,3);

console.log ('Numeros inseridos: ' + 2 + ' - ' + 3)
console.log ('soma: ' + somaDois)
console.log ('Diferença: ' + subtraçãoDois)
console.log ('Multiplicação: ' + multiplicaçãoDois)
console.log ('Divisão: ' + divisãoDois)


