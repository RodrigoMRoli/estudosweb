const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

/* o modus operandi do switch em javascript é o seguinte: a variável ou condição ou função, etc. vai entrar no
switch em seu case e dali vai sair executando todos os cases abaixo caso não use o 'break' não faz muito
sentido mas é a assim que a linguagem funciona. O 'default' esta ali para caso a condição não se encaixe
em nenhum case */