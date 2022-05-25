function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)

/* try é colocado quando se tem uma expressão que você epera que dê erro,
 caso dê o catch é utilizado para tratamento de erro,
pra criar um log ou algo do tipo, no exemplo tem pouca informação mas poderia ser tipo de erro,
código, mensagem personalizada, id, etc.
e o finally será chamado dando erro na execução ou não */