const expect  = require('chai').expect;
const process = require('./../day1/captcha').process;
const fs = require('fs');

it('Only repeating numbers are summed', function() {
        
        const testout = process('1122')

        expect(testout).to.equal(3);
        
});

it('number matches the next', function() {
    
    const testout = process('1111')

    expect(testout).to.equal(4);
    
});

it('no repeating number matches', function() {
    
    const testout = process('1234')

    expect(testout).to.equal(0);
    
});

it('String is circular, check for that', function() {
    
    const testout = process('91212129')

    expect(testout).to.equal(9);
    
});

fs.readFile('./day1/input.txt', function (err, data) {
    if (err)
        throw err;
    if (data)
        console.log(process(data.toString('utf8')));
})



