// nome 

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

const endereco =args[2].split('=')[1]

console.log(endereco)


console.log(`O nome dele é ${nome} e ele tem ${idade} anos e mora na ${endereco}`)


/*Exemplos: 

####split() — Quebra uma string em partes
É um método de strings.

Divide a string em partes com base em um caractere separador (ex: vírgula, espaço, =...).

Retorna um array.

const frase = "nome=André";
const partes = frase.split("=");

console.log(partes);      ["nome", "André"]
console.log(partes[1]);   "André"

####slice() — Recorta um array (ou string)
É um método de arrays (e também funciona em strings).

Serve para pegar uma fatia de elementos de um array.

Não altera o original — retorna um novo array.
pode ser a partir de em diantes (1) ou definir o inicio e o fim (2,4);

array

const argumentos = ['node', 'index.js', 'nome=André', 'idade=37'];
const args = argumentos.slice(2);

console.log(args); // ['nome=André', 'idade=37']


string

const texto = "abcdef";
const parte = texto.slice(2, 4);

console.log(parte); // "cd";*/
