/* basicamente uma função if mais simplificada, o exemplo abaixo é uma função 'nota' dentro de uma
variável 'resultado', depois vem a expressão de condição 'verdadeiro ou falso'
caso o resultado for verdadeiro ele retorna 'Aprovado', caso for falso ele retorna 'reprovado' */

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))