/*
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
 * de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de
 * juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(capitalInicial, txJuros, tempo) {
    return (capitalInicial * txJuros * tempo) + capitalInicial
}

function jurosCompostos(capitalInicial, txJuros, tempo) {
    // ... codigo
    return capitalInicial * Math.pow((1 + txJuros), tempo)
}

console.log(jurosSimples(1200, 0.02, 14))
console.log(jurosCompostos(620, 0.015, 24))