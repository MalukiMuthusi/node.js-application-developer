'use strict'
const assert = require('assert')
const buffer = Buffer.alloc(1024) // use alloc to allocate safely

for (const byte of buffer) assert.equal(byte, buffer[0])
console.log('passed!')

