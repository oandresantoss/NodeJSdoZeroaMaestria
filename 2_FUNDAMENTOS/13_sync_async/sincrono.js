const fs = require('fs')

console.log('INICIO')

fs.writeFileSync('arquivo.txt', 'oi')
fs.writeFileSync('arquivo2.txt','Agora entendi essa bagaça!!!!')


console.log('Fim')
