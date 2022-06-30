const sequencia = {
    _valor: 1, // por convencao, _{parametro} passa a ser um param privado
    get valor () { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // repare que por conta da construcao a sequencia nao retrocedeu
console.log(sequencia.valor, sequencia.valor)