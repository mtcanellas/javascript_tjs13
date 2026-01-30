const leia = require("readline-sync");


// declarando vetor e seus respectivos valores
let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6, ];

let numeroProcurado = leia.questionInt("Digite o numero a ser encontrado: ");
let encontrei = 0; // o 0 significa que ainda não achei e o 1 achei V/F
let posicao; // mesmo esquema do exercicio Dowhile, criamos pra chamar ela depois

for(let i = 0; i <vetor.length; i++){
    if(vetor[i] === numeroProcurado){
        encontrei = 1; //se o valor for igual ao do procurado TRUE achamos o valor.
        posicao = i; // aciono a variavel que foi declarada mas sem valor no escopo, pra guardar a posicao
        break;
    }
}

// resultado é mostrado agora
if (encontrei) {
    console.log(`O numero ${numeroProcurado} está localizado na posição: ${posicao}`);

}else {
    console.log(`O numero ${numeroProcurado} não foi encontrado!`); 
}
