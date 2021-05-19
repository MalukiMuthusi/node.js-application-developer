// serial execution using promises

const { readFile } = require('fs').promises
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

const print = (contents) => {
    console.log(contents.toString())
}

readFile(bigFile)
    .then((contents) => {
        print(contents)
        return readFile(mediumFile)
    }).then((mediumFileContents) => {
        print(mediumFileContents)
        return readFile(smallFile)
    }).then((smallFileContents) => {
        print(smallFileContents)
    }).catch(console.error)