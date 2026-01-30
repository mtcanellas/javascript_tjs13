// 1. Criamos a estrutura da Matriz (Uma lista que contém outras listas)
let matriz = [
    [1, 7, 9], // Linha 0 (matriz[0])
    [2, 6, 4]  // Linha 1 (matriz[1])
];

// 2. O primeiro Loop (Externo) percorre as LINHAS
// Ele pergunta: "Quantas listas existem dentro da matriz?" (matriz.length = 2)
for (let linha = 0; linha < matriz.length; linha++) {
    
    console.log(`\n--- Entrando na Linha ${linha} ---`);

    // 3. O segundo Loop (Interno) percorre as COLUNAS de cada linha
    // Ele pergunta: "Quantos números existem dentro desta linha específica?" (matriz[linha].length = 3)
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        
        // Pegamos o valor exato usando as coordenadas [linha][coluna]
        let valorAtual = matriz[linha][coluna];

        // Mostramos o que está acontecendo:
        console.log(`Acessando coordenada: [${linha}][${coluna}] | Valor encontrado: ${valorAtual}`);
    }
}

console.log("\nLoop finalizado com sucesso!");