console.log(Math.ceil(6.1)) // não sei o que é, nem quero saber, inútil pra mim que to começando agora

const obj1 = {} // objeto declarado e vazio
obj1.nome = 'Bola' // esta criando de forma dinâmica, fora da declaração, um nome novo dentro do objeto
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}
const obj2 = new Obj('cadeira')  
/* 

o que esse 'new' esta fazendo no código? bom, para ficar claro: esta declarando uma variável 'const' de nome 'obj2' e valor de 'cadeira
ou seja, esta criando um novo par, dinamicamente(depois da declaração do próprio) dentro do objeto de nome 'obj'

*/
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

/*

resultado impresso do console:
7
Bola
cadeira
mesa
Exec...

*/ 
