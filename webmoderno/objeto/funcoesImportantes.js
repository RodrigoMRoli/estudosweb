const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log("1 -> " + Object.keys(pessoa))
console.log("2 -> " + Object.values(pessoa))
console.log("3 -> " + Object.entries(pessoa))

// log : 
// 1 -> [ 'nome', 'idade', 'peso' ]
// 2 -> [ 'Rebeca', 2, 13 ]
// 3 -> [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

/* outra forma

Object.entries(pessoa).forEach(([chave, valor]) => { // utilizando destructuring, quebrando a array
    console.log(`${chave}: ${valor}`)
})*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // -> importante pra krl
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // repara que o valor original vai se manter
// log:
// 01/01/2019

console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // valor que sera subscrito será sempre o último

Object.freeze(obj)
obj.c = 1234
console.log(obj)

/* log: 
{ a: 4, b: 2, c: 3 }
*/