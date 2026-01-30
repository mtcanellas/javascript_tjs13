const leia =require("readline-sync");

console.log("============================================");
console.log("      LANCHONETE GENERATION                 ");
console.log("============================================");
console.log("(1) - Cachorro quente");
console.log("(2) - X SALADA");
console.log("(3) - X BACON");
console.log("(4) - BAURU");
console.log("(5) - REFRIGERANTE");
console.log("(6) - SUCO");
console.log("============================================");
console.log("                                            ");

const produto =leia.questionInt("Digite o codigo do produto: ");
const quantidade = leia.questionInt("Digite a quantidade: ");


