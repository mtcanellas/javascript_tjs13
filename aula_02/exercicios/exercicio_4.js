const leia = require("readline-sync");

let n1 = leia.questionFloat("Escreva um numero: ");
let n2 = leia.questionFloat("Escreva o segundo numero: ");
let n3 = leia.questionFloat("Escreva o terceiro numero: ");
let n4 = leia.questionFloat("Escreva o quarto numero: ");

let diferenca = (n1*n2) - (n3*n4);

console.log("A diferença é" +  diferenca.toFixed(1));
