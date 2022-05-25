function teste1(num) {
    if(num > 7) 
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)

/* duas questões foram ensinadas aqui: 1. ';' usadas na estrutura de controle sempre levam a desastre. Porque?
porque em javascript quando você chama uma estrutura de controle ela permite que você elabore uma sentença de
código atrelada a ela sem que for necessário declarar o bloco de código. Não é recomendado a utilizar este
recurso, para não ficar confuso e também não tem necessidade nenhuma, além de que podem ocorrer erros como
esse, em que o encriptador esta considerando o ponto e vírgula como linha de código ou seja, não esta fazendo
absolutamente nada pois ele lê uma linha vazia depois da condicional. Lembre-se: sempre abra um bloco de
código depois das estruturas de controle. 2. você pode utilizar uma estrutura de controle se precisas abrir {}
porque ele considera aquela linha apenas. Não utilize esse recurso. */