// read the file contents of 3 files of different sizes
//  show that the smallFile's content are display first although it read last
//  this is because the operations to read a file is asynchronous
const { readFile, read } = require('fs')
const print = require('./print')
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

readFile(bigFile, print)
// this will be printed first be the line `const { readFile, read } = require('fs')`
console.log('#####this will be printed first be the line `const { readFile, read } = require("fs")`######')
readFile(mediumFile, print)
console.log('#############################################################################')
readFile(smallFile, print)
console.log('#############################################################################')