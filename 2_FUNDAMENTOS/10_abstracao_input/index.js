const inquirer = require('inquirer')

inquirer.prompt([
    {name: 'p1',message: 'Qual a primeira nota?',},
    {name: 'p2',message: 'Qual a segunda nota?',},
    
]).then((answers) => {
    console.log(answers)
    const media = (Number(answers.p1) + Number(answers.p2)) / 2

    console.log(`A média é: ${media}`)
})
.catch(err => console.log(err))

