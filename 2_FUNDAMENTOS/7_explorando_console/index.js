//impressão de mais de uma valor
const x = 10
const y ='André'
const z = [1,2]

console.log(x,y,z)

//contagem de impressão
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variaveis entre strings
console.log("O nome dele é %s, e ele é programador", y)
//foi substituido por templatescream + placehouder 
console.log(`O nome dele é ${y}, e ele é programador`)


// Limpeza do console
setTimeout(() => {
    console.clear()
}, 10000)