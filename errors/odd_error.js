class OddError extends Error {
    constructor(varName = '') {
        super(varName + ' must be even')
        this.code = 'ERR_MUST_BE_EVEN'
    }

    get name() { return `OddError [${this.code}]` }
}

module.exports = { OddError }