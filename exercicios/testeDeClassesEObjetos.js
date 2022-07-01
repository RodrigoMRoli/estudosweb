function Animal (nome) {
    this.nome = nome;
}

Animal.prototype.falar = function() {
    console.log(this.nome + ' faça barulho.');
}

class Cachorro extends Animal {
    falar() {
        console.log(this.nome + ' late.');
    }
}

let cachorro = new Cachorro('Mitzie');
cachorro.falar(); // Mitzie lati.

console.log(typeof Cachorro) // log: function
console.log(typeof cachorro) // log: object