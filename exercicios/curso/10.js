/**
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível
 * por 3 e retorne true ou false.
 */

function divisivelPorTres(valor) {
    return valor % 3 === 0
}

console.log(divisivelPorTres(3))
console.log(divisivelPorTres(4))
console.log(divisivelPorTres(5))
console.log(divisivelPorTres(9))