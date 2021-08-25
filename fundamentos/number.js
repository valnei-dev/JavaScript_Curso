const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //pra saber se o valor do peso 1 é inteiro
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed arredonda em 2 casas decimais
console.log(media.toString(2)) //Mostra a média como String, e se colocar o 2, mostra a String em Binario
console.log(typeof media) //mostra o tipo da constante média
console.log(typeof Number)