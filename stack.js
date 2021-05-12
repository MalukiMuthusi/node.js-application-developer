function f(n = 99) {
    if (n == -1) {
        throw Error()
    }
    f(n - 1)
}
f()