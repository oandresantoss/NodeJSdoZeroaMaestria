const inquirer = require("inquirer")
const chalk = require('chalk')

inquirer
    .prompt([
        { name: 'nome', message: 'Qual o seu nome?' },
        { name: 'idade', message: 'Qual a sua idade?' },
    ])
    .then((answers) => {
        if (!answers.nome || !answers.idade) {
            throw new Error('O nome e a idade são obrigatórios!')
        }

        const response = `O nome do usuário é: ${answers.nome} e ele tem: ${answers.idade} anos`

        console.log(chalk.bgYellow.black(response))
    })
    .catch((err) => console.log(err))