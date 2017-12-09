const expect  = require('chai').expect;
const checksum = require('./../day2/checksum');

const fs = require('fs');

// part 1
fs.readFile('./day2/input-ori.txt', function (err, data) {
    if (err)
        throw err;
    if (data)
        console.log('part 1: \n\r' + checksum.process(data.toString('utf8')));
})

it('Find the diffence between largest and smallest values.', function() {
    
    const testout = checksum.difference([5,1,9,5])

    expect(testout).to.equal(8);
    
});

it('Find the diffence between largest and smallest values on each row, then sum the values.', function() {
    
    const testout = checksum.process('5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8')

    expect(testout).to.equal(18);
    
});


