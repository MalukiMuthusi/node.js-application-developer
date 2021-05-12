const wolf = {
    howl: function () { console.log(this.name + ': awooooooooo') }
}

const dog = Object.create(wolf, {
    woof: { value: function () { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, { name: { value: 'Rufus the dog' } })

rufus.woof() // Rufus the dog: woof 
rufus.howl() // Rufus the dog: awooooooooo

function createDog(name) {
    return Object.create(dog, {
        name: { value: name + ' the dog' }
    })
}

const anotherRufus = createDog('AnotherRufus')
anotherRufus.woof()
anotherRufus.howl()