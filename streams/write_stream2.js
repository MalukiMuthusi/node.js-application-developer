// create a contrived write stream
// write stream are mostly useful for I/O , they are integrated with native C-bindings

'use strict'

const { Writable } = require('stream')

const createWriteStream = (data) => {
    return new Writable({
        decodeStrings: false,
        write(chunk, enc, next) {
            data.push(chunk)
            next()
        }
    })
}

const dataArray = []
const writable = createWriteStream(dataArray)
writable.on('finish', () => { console.log('finished writing data') })
writable.write('Nairobi\n')
writable.write('Mombasa\n')
writable.write('Kisumu\n')
writable.write('Nakuru\n')
writable.end()

console.log(dataArray)