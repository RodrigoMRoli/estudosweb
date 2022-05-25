let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2) 

/*
retorno: no primeiro caso, ele retorna verdadeiro por causa da sequência da operação que foi mal
feita primeiro ele adiciona um ao 'num1' que fica =2 depois ele comprara ao 'num2' que também é dois,
depois de comparar é que ele diminui de 'num2', por isso retorna verdadeiro

no segundo caso, ele retorna os valores sem nenhum modificador, aogra a variável esta correta para
comparação e retorna falso pois num1 = 2 e num2 = 1
*/