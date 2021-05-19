// tolerate errors, when awaiting many promises

const { readFile } = require('fs').promises

const print = (contents) => {
    console.log(contents)
}

const files = Array.from(Array(3)).fill(__filename)

async function run() {
    const readers = files.map((file) => readFile(file))
    const results = await Promise.allSettled(readers)

    results.filter(({ status }) => status == 'rejected')
        .forEach(({ reason }) => console.error(reason))

    const data = results.filter(({ status }) => status == 'fulfilled')
        .map(({ value }) => value)

    print(Buffer.concat(data).toString())
}

run().catch(console.error)