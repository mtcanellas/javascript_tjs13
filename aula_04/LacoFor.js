
//import de biblioteca
const leia = require("readline-sync");

//questionInt pois quero um numero inteiro.
let numero = leia.questionInt("Digite um numero inteiro: ")
 
//for( valor inicial; condição limite ou teste; contador)

for(let contador = 1; contador <=10; contador ++){
console.log(`${numero} x ${contador} = ${numero * contador}`);
}