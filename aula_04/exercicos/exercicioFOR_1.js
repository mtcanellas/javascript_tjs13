const leia = require("readline-sync");


let n1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
let n2 = leia.questionInt("Digte o ultimo numero do intervalo: ");
// Validando primeiro pra saber se o n1 é menor que n2
if (n1 >= n2) {
    console.log("Intervalo invalido!");

} else {
    console.log (`Intervalo entre ${n1} e  ${n2}: `);



//FOR começando no N1 e indo até o n2

for (let i = n1; i <= n2; i++) {



// Usando % ( para qnd o resto for 0 validar como multiplo)
if( i % 3 === 0 && i %5 === 0 ){
    console.log(`${i} é multiplo de 3 e 5`);
}
}

}