const readline = require('readline');

function inverterString(str) {
    var invertedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (answer) => {
    var stringInvertida = inverterString(answer);
    console.log("String original:", answer);
    console.log("String invertida:", stringInvertida);
    rl.close();
});
