// read contents from different files and log in an array, when you have read all the files log the array to the display

const { readFile } = require('fs')
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

const data = []
const print = require('./print')

readFile(bigFile, (err, contents) => {
    if (err) print(err)
    else data.push(contents)

    readFile(mediumFile, (errMediumFile, contentsMediumFile) => {
        if (errMediumFile) print(errMediumFile)
        else data.push(contentsMediumFile)

        readFile(smallFile, (errSmallFile, contentsSmallFile) => {
            if (errSmallFile) print(errSmallFile)
            else data.push(contentsSmallFile)

            print(null, Buffer.concat(data))
        })
    })
})