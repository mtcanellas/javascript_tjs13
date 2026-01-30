const leia = require("readline-sync");

let idade = leia.questionInt(" Digite uma idade");

let menor21 = 0
let maior50 = 0

while(idade >= 0){ // entrada de idade para sabermos que não é negativa
    if(idade < 21 ){
        menor21 ++;

    } else if(idade > 50)  { //else if pois preciso saber só quem é mais de 50
        maior50++;           // nao quem esta entre 21 e 50
    }   
        idade = leia.questionInt("Digite uma idade: "); 
        //Pergunto dnv a idade para o while verificar antes de fazer
        // OBS: nao fazer igual vc fez deixando em loop infinito :D

 
}

console.log(`O total de idades menors de 21 anos é: ${menor21}`);
console.log(`O total de pessoas maiores de 50 anos é: ${maior50}`);