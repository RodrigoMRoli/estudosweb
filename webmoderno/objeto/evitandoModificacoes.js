// Object.preventExtensions -> voce consegue deletar/modificar os valores mas nao pode adicionar atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -> voce consegue alterar os valores mas nao consegue deletar nem adicionar -> not writable
const pessoa1 = { nome: 'Juliana', idade: 35}
Object.seal(pessoa1)
console.log('Selado:', Object.isSealed(pessoa1))

pessoa1.sobrenome = 'Silva'
delete pessoa1.nome
pessoa1.idade = 29
console.log(pessoa1)

// Object.freeze = voce nao consegue alterar || deletar || adicionar nesse objeto
const pessoa2 = { nome: 'Ana', idade: 27, peso: 55}
Object.freeze(pessoa2)
console.log('antes: ', pessoa2)

delete pessoa2.nome
pessoa2.idade = 15
pessoa2.sexo = 'feminino'
console.log('depois: ', pessoa2)