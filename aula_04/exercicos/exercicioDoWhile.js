const leia = require("readline-sync");

let somaPositivo = 0
let numero; // declaração feita fora, para que o do while a use,
            // sei lá só sei que é assim.

do {
    // diferente do while ele vai pedir o numero para fazer 1x ao menos.
    numero = leia.questionInt("Digite um numero: ");
   
    // Se o numero for positivo ele é somado.
    if(numero > 0){
        // += é a mesma coisa que somaPositivo = somaPositivo + numero;
        somaPositivo += numero;
    }

 // "!== significa diferente de" então sempre que comparar o numero com 0, e for diferente ele volta pro do
} while (numero !== 0);

console.log(`A soma dos numeros positivio é: ${somaPositivo}`);

