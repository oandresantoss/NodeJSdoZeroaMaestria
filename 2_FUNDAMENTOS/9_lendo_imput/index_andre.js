const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let respondeu = false;

readline.question('Qual a sua linguagem preferida? ', (language) => {
    respondeu = true;

    if (language == 'python') {
        console.log("Isso nem é linguagem");
    } else {
        console.log(`A minha linguagem favorita é: ${language}`);
    }

    readline.close();
});

setTimeout(() => {
    if (!respondeu) {
        console.clear();
        console.log('Você não respondeu a tempo!');
    }
}, 10000); // Espera 10 segundos
