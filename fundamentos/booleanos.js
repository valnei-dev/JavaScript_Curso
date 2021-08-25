let isAtivo = false

console.log(isAtivo)

isAtivo = true //nesse ponto a variavel muda de valor
console.log(isAtivo)


isAtivo = 1
console.log(!!isAtivo) //tranformar o "isAtivo" em booleano
//o "!!" representa o não não



//tipos que são verdadeiros
console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//tipos que são falsos
console.log('os falsos')
console.log(!!0)
console.log(!!'') //verifica se a string está vazia. Serve para testar se o campo foi preenchido
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 )) //O "||" significa "ou"

//exemplo de escolha: 
let nome = ''

console.log(nome || 'Desconhecido') //Se o valor do nome tiver vazio, ele imprime 'Desconhecido'



