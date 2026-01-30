const leia = require('readline-sync'); // Importa a biblioteca para ler o teclado

let numero = leia.questionInt('Digite um numero inteiro: '); // Pede o número da tabuada

let contador = 1; // Cria o ponto de partida (começa em 1)

do {
    // 1. EXECUTA primeiro: Imprime o cálculo no console
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    
    // 2. INCREMENTA: Soma +1 ao contador
    contador++;

// 3. TESTA depois: Verifica se o contador ainda é menor ou igual a 10
} while (contador <= 10);

    //do while sempre vai executar e depois testar a condição