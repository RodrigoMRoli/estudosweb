/*
1- Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma,
subtração, multiplicação e divisão desses valores
*/
function calc(a, b){
    w = a + b
    x = a - b
    y = a * b
    z = a / b
    arr = [w, x, y, z]
    return arr.toString()
}

console.log(calc(2, 2))