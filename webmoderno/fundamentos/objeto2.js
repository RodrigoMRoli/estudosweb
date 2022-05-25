console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto)

/*

Resultado do código: 
function
object
function
object
function
object

-------------------------------------------------------------------------

a 'class' pode estar no código mas internamente no interpretador javascript ela é uma função internamente. é só um detalhe de sintaxe
o que é um objeto?
ainda não sei, mais para frente no curso, terá um capítulo especialmente para esse tema, aqui eu aprendi as diversas formas de declaração de função e objeto, que é bom para uma possível análise de código

*/