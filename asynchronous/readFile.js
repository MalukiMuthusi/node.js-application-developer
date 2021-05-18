const { readFile } = require('fs')

// read the current file and display its content
readFile(__filename, (err, contents) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(contents.toString()) // even the comments will be printed
})