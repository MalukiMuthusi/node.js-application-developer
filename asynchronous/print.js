// display the contents if there is no error
const print = (err, contents) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(contents.toString())
}

module.exports = print