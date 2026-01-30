const leia = require("readline-sync");


// primeiro criando as variaveis de pares e impares, para serem contadores
let pares = 0
let impares = 0


//Parametros pro meu for funcionar( inicio = variavel i , condição eqnto for menor ou igual a 10, e no final da volta some 1"i++")
for (let i = 1; i <=10; i++){


    //pedindo pra digitar do primeiro até o decimo numero
  let numero =leia.questionInt(`Digite o ${i} numero: `) 
  
  if(numero % 2 === 0){
    pares++; //se for TRUE ele vai contar mais um na contagem de pares
    } else{
        impares++; //se for FALSE ele conta mais um na contagem de impares
    }

}
// exibindo resultado no console apos terminar 
console.log(`O total de numeros pares é: ${pares}`);
console.log(`O total de numeros impares é: ${impares}`)


