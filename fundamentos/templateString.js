const nome = 'Rebeca'

const concatenacao = 'Olá' + nome + '!'

const template = `
Olá 
${nome}!` //Essa é outra opção de interpolar, que aceita quebra de linha

console.log(concatenacao, template)


// expressoes...

console.log(`1 + 1 = ${1 + 1}`) //Pega o resultado e mostra o resultado

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) //Ele vai pegar a frase 'cuidado' passar para a função "up" e como a função está configurada para ser maiuscula, o resultado é maiusculo


