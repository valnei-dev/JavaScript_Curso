let c = 3
let d = c
d++
console.log(d, c)

//O valor de 'c' não muda porque o d recebe uma cópia por valor


//Com Objetos já é feito por referencia
//Então se eu fizer



/*

const a = {name: 'Teste'}
a    >>  Ele mostra que o valor de a é 'Teste'

const b = a   >>  O b pega a mesma referencia de a

const b = {name: 'Opa'}  >> Agora o 'b' e o 'a' pegam a referencia 'Opa'

a, b   >> Mostrariam o 'Opa'

*/


/***********************************************************************/


//Prático

let valor //foi declarado, mas não inicializada
console.log(valor)  //Não atribui nada

// console.log(valor2)  >>> is not defined

valor = null  //Não está apontando para nenhum valor e não tem endeço que aponte para algo
//foi inicializada, mas não aponta

console.log(valor)

//Sempre usar null se quiser zerar o valor de uma variavel

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = null //Preço está sem definição
console.log(produto.preco)
console.log(produto)