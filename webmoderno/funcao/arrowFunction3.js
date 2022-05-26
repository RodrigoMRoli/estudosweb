let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/* a grande mensagem dessas aulas sobre função arrow foi => a grande qualidade da função é que o this
aplicado na função terá sempre como alvo o dono da função arrow e nem se forçar usando a conotação .bind
vai funcionar para mudar isso. */