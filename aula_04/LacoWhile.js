const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");

let contador = 1;

while(contador <= 10){
    
    //            apenas está exibindo o valor da variavel e do contador para o resultado da multiplicação 
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador ++;
}