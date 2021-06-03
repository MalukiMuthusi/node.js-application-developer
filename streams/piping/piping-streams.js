'use strict'

const { scrypt } = require("crypto")
const { Transform, pipeline } = require("stream")
const net = require('net')

const createTransformStream = () => {
    return new Transform({
        decodeStrings: false,
        encoding: 'hex',
        transform(chunk, enc, next) {
            scrypt(chunk, 'a-salt', 32, (err, key) => {
                if (err) {
                    next(err)
                    return
                }
                next(null, key)
            })
        }
    })
}

net.createServer((socket) => {
    const transfrom = createTransformStream()
    const interval = setInterval(() => {
        socket.write('beat\n')
    }, 1000)

    pipeline(socket, transfrom, socket, (err) => {
        if (err) {
            console.log('socket error: ', err)
        }
        clearInterval(interval)
    })
}).listen(3000)
