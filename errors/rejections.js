// errors in asynchronous code are raised as rejections
const codify = require('./codify_util')
const { OddError } = require('./odd_error')

const err_amount_must_be_number = 'ERR_AMOUNT_MUST_BE_NUMBER'
const err_amount_out_range = 'ERR_AMOUNT_OUT_OF_RANGE'
const err_amount_must_be_even = 'ERR_AMOUNT_MUST_BE_EVEN'
function doTask(amount) {
    return new Promise((resolve, reject) => {
        if (typeof amount !== 'number') reject(codify(new TypeError('amount must be a number'), err_amount_must_be_number))

        if (amount <= 0) reject(codify(new RangeError('amount must be greater than zero'), err_amount_out_range))

        if (amount % 2) reject(codify(new OddError('amount'), err_amount_must_be_even))
        resolve(amount / 2)
    })
}

doTask(7).then((result) => {
    console.log('result', result)
}).catch((err) => {
    if (err.code == err_amount_must_be_number) console.error('wrong type')
    else if (err.code == err_amount_out_range) console.error('out of range')
    else if (err.code == err_amount_must_be_even) console.error('odd not allowed')
    else console.error('unknown error')
})