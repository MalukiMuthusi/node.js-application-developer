// asynchronous execution using async and await
//
// scenario with an unknown array size

const { readFile } = require('fs').promises

const print = (contents) => {
    console.log(contents)
}

const files = Array.from(Array(3)).fill(__filename)

async function run() {
    const data = []
    for (const file of files) {
        data.push(await readFile(file))
    }

    print(Buffer.concat(data).toString())
}

run().catch(console.error)