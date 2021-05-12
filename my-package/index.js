'use strict'
const format = require('./format')



if (require.main === module) {
    const pino = require('pino')
    const logger = pino()

    const upperCaseMsg = format.upper('my-package started')
    logger.info(upperCaseMsg)
} else {
    const reverseAndUpper = (str) => {
        return format.upper(str).split('').reverse().join('')
    }

    module.exports = reverseAndUpper
}

