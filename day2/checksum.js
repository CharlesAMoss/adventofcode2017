function difference(arr) {
    const sorted = arr.sort((a,b) => a - b)
    return sorted.pop() - sorted.shift()
}

function process(str) {
    return str.split('\n')
        .map(c => c.replace(/\s+/g, " "))
        .map(c => c.split(' '))
        .map(difference)
        .reduce((a, b) => a + b)
}

module.exports = {
    process : process,
    difference : difference
}

