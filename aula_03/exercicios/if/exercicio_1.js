const leia = require("readline-sync")

const n1 = leia.questionFloat ("Digite o valor de A ");
const n2 = leia.questionFloat ("Digite o valor de B ");
const n3 = leia.questionFloat ("Digite o valor de C ");

const soma = n1 + n2;
                            
if( soma > n3){
    console.log("A soma de A + B é Maior do que C");
    
}
else if(soma < n3) {
    console.log("A soma de A + B é menor do que C");
}

else {
    console.log ("A soma de A + B é igual a C");
}