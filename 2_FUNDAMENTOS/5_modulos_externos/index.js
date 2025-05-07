const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
const time = args['time']

console.log(nome,profissao,time)

console.log(`O nome dele é ${nome} e a profissão é ${profissao} e o time é ${time}`)

