const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let temp;
    
    while (a <= number) {
        if (a === number) {
            return true;
        }
        temp = a;
        a = b;
        b = temp + b;
    }
    
    return false;
}

rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", function(userInput) {
    userInput = parseInt(userInput);

    if (isNaN(userInput)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (isFibonacci(userInput)) {
            console.log(userInput + " pertence à sequência de Fibonacci.");
        } else {
            console.log(userInput + " não pertence à sequência de Fibonacci.");
        }
    }

    rl.close();
});
