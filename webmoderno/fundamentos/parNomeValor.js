/* um objeto é uma coleção de chave/valor */

const saudacao = 'Opa' // contexto léxico 1 -> contexto nesse caso é o nível em que a variável esta sendo declarada, no caso aqui é o nível do arquivo que é global.

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2 -> nesse contexto esta declarado dentro da funcão, logo não gera conflito com a variável local, mesmo tendo o mesmo nome
    return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor. No caso:]
const cliente = {
    nome: 'Rodrigo',
    idade: 24,
    peso: 100,
    endereco: { 
        logradouro: 'Rua Galena',
        numero: 50
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

console.log(typeof saudacao)
console.log(typeof exec())
console.log(typeof cliente)

/*

ficou claro agora na minha cabeça o que é exatamente um objeto, nada mais é do que uma propriedade de variável que armazena em pares, nomes/chaves e valores.
no caso para ser bem específico:
Dentro do objeto 'cliente' existe um nome/chave 'nome' e um valor de 'Rodrigo', um nome/chave 'idade' e um valor '24'

*/