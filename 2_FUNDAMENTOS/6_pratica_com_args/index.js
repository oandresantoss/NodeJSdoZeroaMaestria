
const minimist = require("minimist")


//externo 
const args =minimist(process.argv.slice(2))

//interno 
const soma = require('./soma').soma


const a = Number(args['a'])
const b = Number(args['b'])

soma(a,b)
