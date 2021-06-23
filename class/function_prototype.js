// using functional prototypes

const animal = {
    move: function () {
        console.log("An animal can change position, " + this.name + " is an animal")
    }
}

const sapian = Object.create(animal, {
    crawl: {
        value: function () {
            console.log("Homo Sapians started crawling on four, " + this.name + " is a sapian")
        }
    }
})

const man = Object.create(sapian, {
    name: { value: "Man" }
})

man.crawl()
man.move()