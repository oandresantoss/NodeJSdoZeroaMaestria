const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual sua idade?',
    }
 
]). then((answers) => {
  
    const nome = answers.nome;
    const idade = parseInt(answers.idade);
    console.log(chalk.bgYellow.black(`o nome do aluno é: ${nome}, e a idade é: ${idade} anos`));
})
.catch((err) => {
    console.log(chalk.red('Ocorreu um erro: '), err);
});