 const fs = require('fs')


console.log('INICIO')

fs.writeFile('arquivo3.txt', 'oi!', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado')
    }, 1000)
})

console.log('FIM')