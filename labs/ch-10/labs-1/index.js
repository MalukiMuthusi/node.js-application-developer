'use strict'
const assert = require('assert')

function parseUrl(str) {
  try {
    return new URL(str)
  } catch (err) {
    if (err.code == 'ERR_INVALID_URL') return null
  }
}

assert.doesNotThrow(() => { parseUrl('invalid-url') })
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'),
  new URL('http://example.com')
)
console.log('passed!')