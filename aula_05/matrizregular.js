let matriz = [
    [1, 7, 9], // Linha 0 (Índices: 0, 1, 2)
    [2, 6, 4], // Linha 1
    [3, 5, 8]  // Linha 2
];

// O primeiro loop percorre as fileiras (Linhas)
for (let linha = 0; linha < matriz.length; linha++) {
    
    // O segundo loop percorre os elementos dentro daquela fileira (Colunas)
    // Usamos matriz[linha].length para saber quantos itens TEM naquela linha específica
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        
        // A mágica acontece aqui:
        // matriz[linha] -> seleciona a sub-lista (ex: [1, 7, 9])
        // [coluna] -> seleciona o número dentro dela (ex: 7)
        console.log(`Posição [${linha}][${coluna}] contém o valor: ${matriz[linha][coluna]}`);
    }
    
    // Linha visual para separar a leitura de cada andar da matriz
    console.log("---------------------------");
}