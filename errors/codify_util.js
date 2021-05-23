// utility function to add a code an error
function codify(err, code) {
    err.code = code
    return err
}

module.exports = codify