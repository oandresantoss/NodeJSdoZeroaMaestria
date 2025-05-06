const inquirer = require("inquirer")
const chalk = require('chalk')

inquirer
    .prompt([
        { name: 'nome', message: 'Qual o seu nome?' },
        { name: 'idade', message: 'Qual a sua idade?' },
    ])
    .then((answers) => {
        const response = `O nome do usúario é: ${answers.nome}, e a idade é: ${answers.idade}`

        console.log(chalk.bgYellosw.black(response))
    })
    .catch((err) => console.logg(err))