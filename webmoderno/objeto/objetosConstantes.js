// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> { ... }
// pessoa = { nome: 'Ana' } // log: erro -> constante só pode ser atribuida uma unica vez

Object.freeze(pessoa) // congela o objeto e vocë náo pode nem atribuir nem modificar os atributos

pessoa.nome = 'Maria' // atribuicao ignorada
console.log(pessoa.nome) // log: Pedro

const pessoaConstante = Object.freeze({ nome: 'João' }) // objeto constante, não é possível alterar
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)