function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw (TypeError(`both ${a} and ${b} must be numbers`))
    }

    if (a < 0 || a > 100 || b < 0 || b > 100) {
        throw (RangeError('a and b should be values between 1 and 100'))
    }
    console.log(`${a} + ${b} = ${a + b}`)
}

add(20, 30)
add('20', 30)