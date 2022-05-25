function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

/* a estrutura do/while garante que a expressssão seja executada pelo menos 1 vez. Não é muito utilizado de
acordo como o professor, confiei. Mas é um recurso que a linguagem apresenta.
Palavras do curso: "a qualidade do do/while em comparação como o while é que você não precisa declarar
um valor para a variável dentro da estrutura, por conta da estrutura estar atribuindo valor. No caso do
exemplo seria o 'let opcao = -1' poderia ser apenas um 'let opcao' */