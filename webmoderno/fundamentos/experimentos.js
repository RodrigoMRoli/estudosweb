/* é a décima aula em que ele diz para evitar fazer umas 'var' pois é muito perigoso fazer variáveis
em ambientes locais, tente sempre utilizar 'let' ou 'const' pois a variável será global mas o valor
não tem como mudar nem ser acessado localmente */

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca: sem var e let!
abc = 3 //não faça isso em casa
console.log(global.abc)

/* tudo que é trazido para o browser num contexto global e restrito é trazido por este módulo e não
é modificado pelo usuário */

// module.exports = { f: 456, g: false, h: 'teste' }