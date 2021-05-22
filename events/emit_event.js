const { EventEmitter } = require('events')

const ee = new EventEmitter()

ee.on('close', () => console.log('close event fired'))
ee.addListener('close', () => console.log('event received by the long format'))
ee.emit('close')

// arguments passed by emit are passed to the listener
ee.on('add', (a, b) => console.log(a + ' + ' + b + ' = ' + (a + b)))
ee.emit('add', 41, 59)

console.log()
console.log('################################################################')
// the prependLister is used to inject a listener to the top
ee.on('important-event', () => console.log('I registered first'))
ee.prependListener('important-event', () => console.log('I registered last but the event was of urgency to me, so I had to receive it first'))
ee.emit('important-event')

console.log()
console.log('################################################################')

// the once method registers a listener to receive an event only once. The listener is then unregistered.
ee.once('12pm', () => console.log('I registered only once'))
ee.on('12pm', () => console.log('I registered for all the events happening at 12pm.'))
ee.emit('12pm')
ee.emit('12pm')

console.log()
console.log('################################################################')
// removeListener method is used to unregister a listener from an event

const listenerParent = () => console.log('attend the son\'s career talk')
const highSchoolCareerDay = 'high-school-career-day'
ee.on(highSchoolCareerDay, listenerParent)
ee.emit(highSchoolCareerDay)
ee.emit(highSchoolCareerDay)

ee.removeListener(highSchoolCareerDay, listenerParent)
console.log('the listener unregistered from the event')
ee.emit(highSchoolCareerDay)
