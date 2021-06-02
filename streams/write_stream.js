'use strict'

const fs = require('fs')
const writable = fs.createWriteStream('./out.o')
writable.on('finish', () => { console.log('sub1: finished writing data') })
writable.write('Nairobi\n')
writable.write('Mombasa\n')
writable.write('Nakuru\n')
writable.write('Kisumu\n')
writable.write('Cities in Kenya')