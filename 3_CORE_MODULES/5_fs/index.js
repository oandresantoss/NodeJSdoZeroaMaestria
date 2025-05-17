const http = require('http')

const port = 3000

const server = http.createServer((req,res) => {
    
})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})