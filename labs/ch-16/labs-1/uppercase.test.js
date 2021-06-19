'use strict'

const uppercase = require('./uppercase')
const tap = require('tap')

tap.equal(uppercase('some'), 'SOME')
tap.throws(() => uppercase(22), Error('input must be a string'))