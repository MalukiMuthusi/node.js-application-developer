// Prototypal Inheritance (Constructor Functions)
function Wolf(name) {
    this.name = name
}

Wolf.prototype.howl = function () {
    console.log(this.name + ': awooooooooo')
}

function Dog(name) {
    Wolf.call(this, name + ' the dog')
}

function inherit(proto) {
    function Chainlik() { }
    Chainlik.prototype = proto
    return new Chainlik()
}

Dog.prototype = inherit(Wolf.prototype)
Dog.prototype.woof = function () {
    console.log(this.name + ': woof')
}

const rufus = new Dog('Rufus')
rufus.woof()
rufus.howl()