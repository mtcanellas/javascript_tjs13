const leia = require("readline-sync");

/* Maneira Antiga (Comentada para comparação):
  
  let matriz = new Array(2);
  for(let indice = 0; indice < matriz.length; indice ++){
      matriz[indice] = Array(3);
  }

  for (let linha = 0; linha < matriz.length; linha ++){
      for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
         matriz[linha][coluna] = leia.questionInt(`matriz[${linha}][${coluna}] = `);
      }
  }
*/

// --- MANEIRA MODERNA ---
// Esta linha faz TUDO: cria 2 linhas, 3 colunas e já pede os dados ao usuário.
let matriz = Array.from({ length: 2 }, // 1. "Crie 2 espaços (linhas)"
    () => Array.from({ length: 3 },    // 2. "Dentro de CADA espaço, crie 3 novos espaços (colunas)"
        () => leia.questionInt("")   // 3. "Dentro de cada coluninha, peça um número"
    )
);
// Exibir os dados de forma organizada em tabela
console.log("\n--- Matriz Gerada ---");
console.table(matriz);

