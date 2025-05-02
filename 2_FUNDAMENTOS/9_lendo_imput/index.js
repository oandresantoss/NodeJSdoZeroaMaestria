const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferedida? ', (language) => {
        if (language == 'python') {
            console.log("Isso nem é liguagem")
        } else {
            console.log(`A minha linguagem favorita é: ${language}`)
        }
    
    readline.close
})