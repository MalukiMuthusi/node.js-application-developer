const tap = require('tap')
const getId = require('./store')

tap.test('returns data', async t => {
    const id = await getId(Buffer.from('some_id'))
    t.type(id.id, 'string')
})

tap.test('throws error', async t => {
    t.rejects(getId(''), Error('input must be a buffer'))
})