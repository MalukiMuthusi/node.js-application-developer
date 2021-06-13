'use strict'

const { execSync } = require('child_process')

const output = execSync(`ls`)

console.log(output.toString())