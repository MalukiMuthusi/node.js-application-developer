const assert = require('assert')

// TODO: 
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

class Cat {
    meow() {
        console.log('meow')
    }
}

class Lynx extends Cat {
    purr() {
        console.log('purr')
    }
}

class Leopard extends Lynx {
    hiss() {
        console.log('hiss')
    }
}

// implement prototypal inheritance using Object.create

const cat2 = {
    meow: function () {
        console.log("meow")
    }
}

const lynx2 = Object.create(cat2, {
    purr: function () {
        console.log("purr")
    }
})

const leopard2 = Object.create(lynx2, {
    hiss: function () {
        console.log("hiss")
    }
})

const felix2 = Object.create(leopard2, {})


const felix = new Leopard() //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)

assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')
