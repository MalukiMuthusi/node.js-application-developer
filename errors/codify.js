// apply duck-typing to catch th right error

const codify = require('./codify_util')

const { OddError } = require('./odd_error')

function doTask(amount) {
    if (typeof amount !== 'number') throw codify(new TypeError('amount must be a number'), 'ERR_AMOUNT_MUST_BE_NUMBER')

    if (amount <= 0) throw codify(new RangeError('amount must be greater than zero', 'ERR_AMOUNT_OUT_OF_RANGE'))

    if (amount % 2) throw new OddError('amount')
    return amount / 2
}

doTask(3)