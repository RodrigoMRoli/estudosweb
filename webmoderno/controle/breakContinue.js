const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

/*
break -> ELE NÃO FUNCIONA EM IF. Quando o 'break' é chamado ele interrompe o loop e manda pra próxima linha de
código
continue -> interrompe o loop naquela condição de continue, no caso do exemplo quando o contador chegou no
índice 5 ele parou, mas o loop não é interrompido e ele segue até o fim.
*/

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
console.log('Fim!')
/*
não usa esse tipo de método, é melhor usar funções porque fica mais organizado
*/