console.log(soma(3, 4)) // --> funcoes declaradas sao lidas primeiro pelo interpretador e por isso
// nao causa erro ao ser executada tantes da funcao, diferente das outras formas

// console.log(sub(3, 4))
// console.log(mult(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))