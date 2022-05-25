function Pessoa() {
    this.idade = 0

    //const self = this
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

/* existem 2 formas de resolver o `this` que varia bastante. a primeira e atribuir a uma constante a
chave 'this' e utilizando a variavel pra driblar a mecanica do 'this' e a outra é utilizando a funcao
bind() com conotacao . para ligar o this ao objeto que voce quer utilizar */