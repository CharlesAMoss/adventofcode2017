function difference(arr) {
    const sorted = arr.sort((a,b) => a - b)
    return sorted.pop() - sorted.shift()
}

function divisible(arr) {
  const [[first, second]] = arr
    .map(value => arr.map(inner => [value, inner]))
    .reduce((curr, next) => [...curr, ...next], [])
    .filter(([first, second]) => first % second == 0 && first != second)

    return first / second
}

function process(str) {
    return str.split('\n')
        .map(c => c.replace(/\s+/g, " "))
        .map(c => c.split(' '))
        .map(difference)
        .reduce((a, b) => a + b)
}

function moreProcess(str) {
    return str.split('\n')
        .map(c => c.replace(/\s+/g, " "))
        .map(c => c.split(' '))
        .map(divisible)
        .reduce((a, b) => a + b)
}

module.exports = {
    process : process,
    difference : difference,
    moreProcess : moreProcess,
    divisible : divisible
}

