// calling a function with the new keyword to create an object with a specific prototype object


function Animal(name) {
    this.name = name
}

Animal.prototype.move = function () {
    console.log("animal can change position, " + this.name + " is an animal")
}

function Sapian(name) {
    Animal.call(this, name)
}

function inherit(proto) {
    function ChainLink() { }
    ChainLink.prototype = proto
    return new ChainLink
}

Sapian.prototype = inherit(Animal.prototype)
Sapian.prototype.crawl = function () {
    console.log("Sapians can crawl, " + this.name + " is a sapian")
}

const man = new Sapian("Man")
man.move()
man.crawl()