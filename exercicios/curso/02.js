/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são
diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne
sua classificação quanto ao tamanho de seus lados.
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function qualTriangulo(a, b, c) {
    if (isNaN(a) === true || isNaN(b) === true || isNaN(c) === true){
        return "Valor Inválido ou Não é um Triangulo"
    } else if(a === b && a === c) {
        return "Triangulo Equilátero"
    } else if (a === b || a === c || b === c) {
        return "Triangulo Isósceles"
    } else if (a !== b && a !== c && b !== c) {
        return "Triangulo Escaleno"
    } else {
        return "Valor Inválido"
    }
}

console.log(qualTriangulo(1, 1, 1)) // expected: "Triangulo Equilátero"
console.log(qualTriangulo(2, 1, 2)) // expected: "Triangulo Isósceles"
console.log(qualTriangulo(2, 2, 1)) // expected: "Triangulo Isósceles"
console.log(qualTriangulo(1, 2, 2)) // expected: "Triangulo Isósceles"
console.log(qualTriangulo(1, 2, 3)) // expected: "Triangulo Escaleno"
console.log(qualTriangulo(1, 2, "hello")) // expected: "Valor Inválido"
console.log(qualTriangulo(Number, 2, 1)) // expected: "Valor Inválido"
console.log(qualTriangulo({}, 2, 1)) // expected: "Valor Inválido"
console.log(qualTriangulo(1, 0, -1)) // expected: "Triangulo Escaleno"