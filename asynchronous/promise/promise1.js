// use promise for asynchronous
//
// promisify is used to convert a callback bases API into a promise based one
const { promisify } = require('util')
const { readFile } = require('fs')

const readFileProm = promisify(readFile)
const promise = readFileProm(__filename)

promise.then((contents) => {
    console.log(contents.toString())
})

promise.catch((err) => {
    console.error(err)
})