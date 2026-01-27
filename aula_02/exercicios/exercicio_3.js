const leia = require("readline-sync");
const moeda = new Intl.NumberFormat('pt-BR',{
    style: 'currency' ,
    currency: 'BRL',
})

let salarioBruto = leia.questionFloat("Escreva seu salario bruto:"); 
let adicionalN = leia.questionFloat("Escreva seu adiciconal noturno:");
let horaextra = leia.questionFloat("Escreva suas horas extras:");
let desconto = leia.questionFloat("Escreva seu descontos:");

let salarioL = salarioBruto + adicionalN + (horaextra * 5) - desconto;

console.log("Seu salário Liquido é:" , moeda.format(salarioL));
