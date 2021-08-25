const valores = [7.7, 8.9, 6.3, 9.2] //Virgula é o separador dos valores

console.log(valores[0], valores[3]) //Mostra os valores dos indices 0 e 3
console.log(valores[4]) //No JavaScript não dá erro, ele apenas informa "undefined"(não definido)
valores[7] = 15

console.log(valores) //JavaScript informa que existe espaço vazio, pois os indices 4, 5 e 6 estão vazios 

console.log(valores.length) //Mostra quantos elementos tem no Array

valores.push({id: 3}, false, null, 'teste') //Adiciona itens a Valores
console.log(valores)

console.log(valores.pop()) //retira o ultimo indice a cada vez que é utilizado
delete valores[0] //tira o elemento de indice 0
console.log(valores.pop())
console.log(valores.pop())
console.log(valores.pop())
console.log(valores)

console.log(typeof valores) //morstra que o array é um object
