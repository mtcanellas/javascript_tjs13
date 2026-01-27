const leia = require("readline-sync");

let salario = leia.questionFloat("Digite o seu salario:  ")
let abono = leia.questionFloat("Digite o seu abono: " );

let novoSalario = salario + abono;

console.log("seu novo salário é:  ",  novoSalario);
