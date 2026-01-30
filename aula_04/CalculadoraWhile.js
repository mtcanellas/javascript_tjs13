const leia = require("readline-sync");

// 1. Declaramos a variável sem valor inicial (economiza memória)
let continua;

do {
    console.log("============================================");
    console.log("        CALCULADORA COM SWITCH CASE         ");
    console.log("============================================");
    console.log("(+) - Soma                                  ");
    console.log("(-) - Subtração                             ");
    console.log("(x) - Multiplicação                         ");
    console.log("(/) - Divisão                               ");
    console.log("============================================");

    let numero1 = leia.questionFloat("Digite o primeiro numero: ", 
                                    {limitMessage: 'Digite um numero float'});

    let numero2 = leia.questionFloat("Digite o segundo numero: ", 
                                    {limitMessage: 'Digite um numero float'});

    // Usando o limit no keyIn para o código não aceitar teclas erradas
    let operacao = leia.keyIn("Digite a operacao: ", {limit: '+-x/'});

    switch(operacao){
        case "+":
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
        case "-":
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
        case "x":
            console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
        break;
        case "/":
            // Dica: Adicionei uma proteção simples para divisão por zero
            if (numero2 === 0) {
                console.log("Erro: Não é possível dividir por zero!");
            } else {
                console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
            }
        break;
        default:
            console.log("Operacao Invalida!");
    }

    // 2. A pergunta vem no final do bloco
    continua = leia.keyIn("Deseja continuar (S/N)? ", {limit: 'snSN'}).toUpperCase();

// 3. O teste acontece AQUI. Se for 'S', ele volta para o "do"
} while(continua === 'S'); 

console.log("\nPrograma encerrado. Até logo!");