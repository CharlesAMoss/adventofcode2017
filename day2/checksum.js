function difference(splArr) {
    const arr = splArr.sort((a,b) => a - b)
    const difference = arr.pop() - arr.shift()
    return difference
}


function process(str) {
    let splits = [];
    if (str.length < 10) {
        splits = str.split('').map(e => parseInt(e))
        return difference(splits)
    } else {
        splits = str.split('\n')
        splits = splits.map(s => s.concat('\t'))
        splits = splits.join('').split('\t').map(s => s.split('').map(e => parseInt(e)))
        splits = splits.map(s => {return difference(s)})
        splits.splice(-1,1)
        return splits.reduce((a, b) => a + b) 
    }   
    

    
    
}

module.exports = {
    process : process
}