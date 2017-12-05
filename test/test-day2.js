const expect  = require('chai').expect;
const checksum = require('./../day2/checksum');

const fs = require('fs');

// part 1

//console.log(checksum.process(''))
fs.readFile('./day2/input.txt', function (err, data) {
    if (err)
        throw err;
    if (data)
        console.log('part 1: \n\r' + checksum.process(data.toString('utf8')));
})

it('Largest and smallest values are 9 and 1, and their difference is 8.', function() {
    
    const testout = checksum.process('5195')

    expect(testout).to.equal(8);
    
});

it('Largest and smallest values are 7 and 3, and their difference is 4.', function() {
    
    const testout = checksum.process('753')

    expect(testout).to.equal(4);
    
});

it('Largest and smallest values are 8 and 2, and their difference is 6.', function() {
    
    const testout = checksum.process('2468')

    expect(testout).to.equal(6);
    
});

