// create a readable stream that reads data from an array
'use strict'

const { Readable } = require('stream')

const createReadStream = () => {
    const data = ['some', 'data', 'to', 'read']
    return new Readable({
        encoding: 'utf-8',
        read() {
            if (data.length === 0) this.push(null)
            else this.push(data.shift())
        }
    })
}

const readable = createReadStream()
readable.on('data', (data) => {
    console.log('sub 1: ', data)
})

readable.on('data', (data) => {
    console.log('sub 2: ', data)
})

readable.on('end', () => {
    console.log('sub 1: finished reading data')
})

readable.on('end', () => {
    console.log('sub 2: finished reading data')
})