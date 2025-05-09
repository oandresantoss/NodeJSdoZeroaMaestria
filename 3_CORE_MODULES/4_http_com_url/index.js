
const http = require('http')

const port = 3000

const server = http.createServer((req,res) => {

    const urlInfo = require('url').parse(req.url, true)
    const nome = urlInfo.query.nome

    res.statusCode = 200
    res.setHeader('contenty-typr', 'text/html')
    
    if(!nome) {
        ReadableStreamDefaultController('<h1>Preencha o seu nome:</h1><form method="GET"><imput type="text" nome="nome"/><input type="submit" value="Enviar"></form>')
    }else {
        res.end(`<h1>Seja bem vindo ${nome}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})