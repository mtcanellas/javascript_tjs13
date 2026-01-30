const leia = require("readline-sync");

// declarando a matriz
let matriz = [
    [1, 2, 3], // Linha 0
    [4, 5, 6], // Linha 1
    [7, 8, 9]  // Linha 2
];

// criando variaveis para guardarem as somas
let somaPrincipal = 0;
let somaSecundaria = 0;

// criando as variaveis para guardas eles em uma linha
// cabelos foram perdidos até lembrar/aprender isso
let elementosPrincipal = "";
let elementosSecundario = ""; // 

// for para percorrer a matriz
for (let i = 0; i < 3; i++) { 
    // como é na diagonal a linha e a coluna vao ser iguais ex: 0,0 1,1 2,2
    elementosPrincipal += matriz[i][i] + " "; // ou seja vai adicionar o numero e o elemento "espaço "
    somaPrincipal += matriz[i][i]; // e somar no valor total

    // AGORA DENTRO DAS CHAVES:
    // aqui enquanto a linha aumenta a coluna diminui então é o indice da ultima  coluna(2) - o Indice(i)
    elementosSecundario += matriz[i][2 - i] + " "; 
    somaSecundaria += matriz[i][2 - i];
}

// Exibição de resultado
console.log(`Elementos da Diagonal Principal: ${elementosPrincipal}`);
console.log(`Elementos da Diagonal Secundária: ${elementosSecundario}`);
console.log(`Soma da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma da Diagonal Secundária: ${somaSecundaria}`);