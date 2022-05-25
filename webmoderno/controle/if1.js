function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})

/* nada demais nessa aula, apenas um detalhe me chamou a atenção, um array e um objeto vazio vão retornar uma condição verdadeira quando convertido pra boolean
 */