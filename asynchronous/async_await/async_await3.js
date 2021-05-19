// concatenating files after they have been read

const { readFile } = require('fs').promises

const print = (contents) => {
    console.log(contents)
}

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

async function run() {
    const data = [await readFile(bigFile), await readFile(mediumFile), await readFile(smallFile)]

    print(Buffer.concat(data).toString())
}

run().catch(console.error)