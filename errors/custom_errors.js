// use of a code property
// subclass an error class
function doTask(amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')

    if (amount <= 0) throw new RangeError('amount must be greater than zero')

    if (amount % 2) {
        const err = new Error('amount must be even')
        err.code = 'ERR_MUST_BE_EVEN'
        throw err
    }

    return amount / 2
}

try {
    const result = doTask(4)
    console.log('result', result)
} catch (err) {
    console.error('Error caught: ', err)
}

class OddError extends Error {
    constructor(varName = '') {
        super(varName + ' must be even')
        this.code = 'ERR_MUST_BE_EVEN'
    }

    get name() { return `OddError [${this.code}]` }
}

function doTask2(amount) {
    if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number')
    }

    if (amount <= 0) {
        throw new RangeError('amount must be greater than zero')
    }

    if (amount % 2) {
        throw new OddError('amount')
    }

    return amount / 2
}

try {
    const result = doTask2(8)
    console.log(`result: ${result}`)
} catch (err) {
    console.log(`doTask2() raised an error `, err)
}

try {
    const result = doTask2("ww")
    console.log('result', result)
} catch (err) {
    if (err instanceof TypeError) {
        console.error('wrong type')
    } else if (err instanceof RangeError) {
        console.error('out of range')
    } else if (err instanceof OddError) {
        console.error('cannot be odd')
    } else {
        console.error('unknown error')
    }

}