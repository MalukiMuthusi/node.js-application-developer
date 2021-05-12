'use strict'
function prefixer(prefix) {
    return (name) => {
        console.log(prefix + ' ' + name)
    }
}
const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
sayHiTo('Dave') // prints 'Hello Dave'
sayHiTo('Annie') // prints 'Hello Annie'
sayByeTo('Dave') // prints 'Goodbye Dave'

