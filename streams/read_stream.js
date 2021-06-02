'use strict'

// create a readable stream and subscribe to receive data from it
const fs = require('fs')
const readable = fs.createReadStream(__filename)

readable.on('data', (data) => {
    console.log(' got data\n', data.toString())
})

readable.on('end', () => {
    console.log(' finished reading')
})