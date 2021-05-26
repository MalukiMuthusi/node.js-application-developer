// JSON.stringify calls the buffer's toJSON method
// 
// to create a buffer from the json call Buffer.from and pass the parsed data field

const buffer = Buffer.from('👀')
const json = JSON.stringify(buffer)

const parsed = JSON.parse(json) // deserialize a JSON object

console.log(parsed)

console.log(Buffer.from(parsed.data))