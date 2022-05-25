
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} // a função quando chamada gera um valor aleatório entre o min e max, no exemplo vai ser entre -1 e 10

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

/* a estrutura WHILE executa o loop enquanto o que foi inserido for verdadeiro, logo, deve-se sempre haver
um hook para retornar falso e sempre tomar cuidado */