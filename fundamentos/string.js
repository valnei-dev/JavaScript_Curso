//3 Simbolos para String: "" e '' e <>

const escola = 'Cod3r'

console.log(escola.charAt(4)) //Mostra o caractere que está no indice 4, que é o r
console.log(escola.charAt(6)) //Mostra o valor vazio, pois não há o indice 6
console.log(escola.charCodeAt(3)) //Mostra essa String na Tabela Unicode
console.log(escola.indexOf('3'))  //Mostra o indice associado ao indice 3

console.log(escola.substring(2)) //Imprime a String a partir do Indice 2 em diante

console.log(escola.substring(0, 3)) //Imprime as String do Indice 0 até 3 indices a frente: 0, 1 e 2 >> por isso é exibido o "Cod"

//alert serve para criar alerta no navegador


console.log('Escola '.concat(escola).concat("!")) //Serve para juntar Strings
console.log(escola.replace(3, 'e')) //Serve para substituir o que está no indice informado
console.log(escola.replace(/\d/, 'e')) //Substitua todos os digitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) //Substitua tudo pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) //Transforma tudo em array
console.log('Ana,Maria,Pedro'.split(/,/)) //Transforma tudo em array

