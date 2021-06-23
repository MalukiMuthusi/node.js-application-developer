// read files in parallel but get the contents based on the order the files are in the array

const { readFile } = require('fs').promises

const files = Array.from(Array(3)).fill(__filename)
const print = (contents) => {
    console.log(contents.toString())
}

async function run() {
    const readers = files.map((file) => readFile(file))
    const data = await Promise.all(readers)
    print(Buffer.concat(data))
}

run().catch(console.error)


// read files in serial order

async function run2() {
    const data = []
    for (const file of files) {
        data.push(await readFile(file))
    }

    print(Buffer.concat(data))
}

run2().catch(console.error)