// use piping to create a readable and writable stream.

'use strict'

const net = require('net')
const socket = net.connect(3000)

socket.pipe(process.stdout) // any data received is piped to stdout
socket.write('hello world\n')

setTimeout(() => {
    socket.write('Goodbye\n')
    setTimeout(() => {
        socket.end()
    }, 250)
}, 3250)
