/**
 * 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 * Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua
 * função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
 * 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
 * mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do
 * vetor, um string com a frase: “Delta é negativo”.
 */

function bhaskara(a, b, c) {
    // calc
    d = delta(a, b, c)
    if (d < 0){
        return "Equação não possui valores reais"
    } else {
        x1 = (-b + Math.sqrt(d)) / (2 * a)
        x2 = (-b - Math.sqrt(d)) / (2 * a)
        return [x1, x2]
    }
}

function delta(a, b, c) {
    // calc
    d = Math.pow(b, 2) - (4 * a * c)
    return d
}

console.log(bhaskara(1, 12, -13))
console.log(bhaskara(2, -16, -18))
console.log(bhaskara(2, 1, 18)) // expect: Equação não possui valores reais