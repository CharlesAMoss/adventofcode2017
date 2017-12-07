function difference(splArr) {
    const arr = splArr.sort((a,b) => a - b)
    const difference = arr.pop() - arr.shift()
    return difference
}

function process(str) {
    let cksm = str.replace(/\s+/g, " ")
    console.log(cksm)
    cksm = cksm.split(' ').map(n => parseInt(n.split('')))
    console.log(cksm)
    cksm = cksm.map(difference)
    console.log(cksm)
    return cksm.reduce((a, b) => a + b)

}

module.exports = {
    process : process,
    difference : difference
}