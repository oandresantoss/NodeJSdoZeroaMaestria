const chalk = require("chalk")

const nota = 5

if (nota >=7) {
    console.log(chalk.green.bold('Parabéns! Você está aprovado'))
} else {
    console.log(chalk.bgRed('Você está de RECUPERAÇÃO'))
}