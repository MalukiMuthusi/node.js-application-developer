'use strict'
const tap = require('tap')
const getID = require('./store')



tap.test('throws error', (t) => {
    getID('', (err, data) => {
        t.same(err, Error('input must be a buffer'))
        t.end()
    })

})

tap.test('returns ID', (t) => {
    getID(Buffer.from('id_angd'), (err, data) => {
        t.type(data.id, 'string')
        t.end()
    })

})