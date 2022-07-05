const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

// console.loh(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.loh(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

/*
é uma estrutura para compartilhamento de dados entre sistemas/linguagens, voce tem a liberdade
de colocar o tipo de arquivo e variável que for, a única questão é a formatação do JSON
ue é estrito à: toda string deve ser imposta por aspas duplas ("string") e não tem como driblar
este formato, só isso. Se não, não funciona!
*/