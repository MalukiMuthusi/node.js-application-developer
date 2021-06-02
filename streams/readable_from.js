// use the utility function Readable.from to create a stream from an iterable

'use strict'

const { Readable } = require('stream')
const readable = Readable.from(['some', 'data', 'to', 'read'])

readable.on('data', (data) => { console.log('sub1: ', data) })
readable.on('end', () => { console.log('sub1: finished reading data') })