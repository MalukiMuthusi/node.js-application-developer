// the eventEmitter in events module is the backbone of nodejs servers

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
    constructor(opts = {}) {
        super(opts)
        this.name = opts.name
    }
    destory(err) {
        if (err) {
            this.emit('error', err)
        }
        this.emit('close')
    }
}