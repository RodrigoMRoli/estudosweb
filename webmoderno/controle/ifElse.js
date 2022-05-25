const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')

/* 1 detalhe: o Javascript vai ler essa string e não vai retornar erro, então é sempre bom ter cuidado com as
condicionais e se esta chegando o valor e tipo que você quer na função */