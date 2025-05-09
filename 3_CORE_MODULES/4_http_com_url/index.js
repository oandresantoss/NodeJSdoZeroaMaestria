
const http = require('http')

const port = 3000

const server = http.createServer((req,res) => {

    const urlInfo = require('url').parse(req.url, true)
    const nome = urlInfo.query.nome

    res.statusCode = 200
    res.setHeader('contenty-typr', 'text/html')
    
    if(!nome) {

    }else {

    }
})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})