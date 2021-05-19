// if value is returned from then, the then method will return a promise that resolves to that value
const { readFile } = require('fs').promises

readFile(__filename)
    .then((contents) => {
        return contents.toString()
    })
    .then((stringFileContents) => {
        console.log(stringFileContents)
    })
    .catch(console.error)