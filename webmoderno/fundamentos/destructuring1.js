/* 

pelo que entendi, na nova versão do javascript foi implementado uma forma de desestruturar algumas estruturas de variaveis como uma array ou objeto. 

*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // conotação: 'tire do objeto estes 2 atributos, 'nome' e 'idade'. Do objeto 'pessoa'
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)

/* a moral aqui é, cuidado na hora de acessar alguma variável que não exista, no caso evite.
Pois ele só vai retornar caso a variavel direta estiver undefined, caso haja diversos filhos
que não existam ou não foram definidos dará erro em todo programa */