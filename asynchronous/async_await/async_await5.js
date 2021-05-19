// parallel execution with sequential ordered output

const { readFile } = require('fs').promises

const print = (contents) => {
    console.log(contents)
}

const files = Array.from(Array(3)).fill(__filename)

async function run() {
    const readers = files.map((file) => readFile(file)) // map file to function
    const data = await Promise.all(readers)
    print(Buffer.concat(data).toString())
}

run().catch(console.error)