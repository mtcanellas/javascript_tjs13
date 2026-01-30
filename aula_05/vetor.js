const leia = require("readline-sync");




//VETOR DECLARADO
let numeros = [10 , 25 , 5 , 45 , 85, 95
];

let cores = Array(5);

for (let indice = 0 ; indice < numeros.length ; indice ++){
    console.log(`numeros[${indice}] = ${numeros[indice]}`);

}

console.log(`O tamanho do vetor numeros é : ${numeros.length}`);

console.table(numeros);

for (let indice = 0 ; indice < cores.length ; indice ++){
    cores[indice] = leia.question("Digite o nome de uma cor: ");
}

console.table(cores);

//para ordenar sort vc precisa dar dois parametros pra ele (a-b crescente e b-a decrescente )
console.table(numeros.sort((a ,b) => b-a));

console.table(cores.sort())

//para que eu consiga achar a posição de um vetor especifico                                                                
console.log("Qual é a posição do elemento 5 no veotr números? " , numeros.indexOf(5))