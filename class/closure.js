// Closure Scope

function init(type) {
    var id = 0
    return (name) => {
        id += 1
        return {
            id: id,
            type: type,
            name: name
        }
    }
}

const createUser = init('user')
const createBook = init('books')

const dave = createUser('Dave')
const annie = createUser('Annie') // has the variable id as dave

const ncb = createBook('Node CookBook')
const dragon = createBook('Compiler Constructions')

console.log(dave)
console.log(annie)

console.log(ncb)
console.log(dragon)