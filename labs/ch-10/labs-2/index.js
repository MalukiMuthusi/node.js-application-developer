'use strict'
const fs = require('fs')
const assert = require('assert')

async function read(file) {
  try {
    return await fs.promises.readFile(file)

  } catch (err) {
    throw new Error('failed to read')
  }
}


async function check() {
  await assert.rejects(
    read('not-a-valid-filepath'),
    new Error('failed to read')
  )
  assert.deepEqual(
    await read(__filename),
    fs.readFileSync(__filename)
  )
  console.log('passed!')
}

check()
