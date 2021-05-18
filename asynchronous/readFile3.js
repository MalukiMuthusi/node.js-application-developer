// implement serial execution
//  call operation to read bigFile, then when it completes read mediumFile and finally read smallFile

const print = require('./print')
const { readFile } = require('fs')
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

readFile(bigFile, (err, content) => {
    console.log()
    print(null, "printing contents of bigFile")
    print(err, content)
    readFile(mediumFile, (err2, content2) => {
        console.log()
        print(null, "printing contents of mediumFile")
        print(err2, content2)
        readFile(smallFile, (err3, content3) => {
            console.log()
            print(null, "printing contents of smallFile")
            print(err3, content3)
        })
    })
})