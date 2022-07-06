/************************************************
 * 
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 * 
 */

function fatorial(valor) {
    valorInicial = valor
    for(let i = 1; valorInicial > i; i++){
        valor *= (valorInicial - i)
    } 
    return valor
}

console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(5))
console.log(fatorial(6))