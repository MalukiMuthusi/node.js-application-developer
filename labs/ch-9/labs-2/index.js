'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()
ee.on('error', () => console.log('error was emitted'))

ee.emit('error', Error('timeout'))
