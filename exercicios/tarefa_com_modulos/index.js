const inquirer = require('inquirer')

inquirer.createPromptModule([
    {
        name: 'p1',
        nome: 'Qual o seu nome?',
    },
    {
        name: 'p2',
        idade: 'Qual sua idade?',
    },
 
]). then((answers) => {
    console.log(answers)
    const nome = (answers.p1)
    const idade =(answers.p2)
    

    console.log(`o nome do aluno é: ${nome}, e a idade é ${idade}`)
})
.catch(err => console.log(err))