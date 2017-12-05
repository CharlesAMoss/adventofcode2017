const expect  = require('chai').expect;
const captcha = require('./../day1/captcha');

const fs = require('fs');

// part 1

// fs.readFile('./day1/input.txt', function (err, data) {
//     if (err)
//         throw err;
//     if (data)
//         console.log('part 1: ' + captcha.process(data.toString('utf8')));
// })

// it('Only repeating numbers are summed', function() {
        
//         const testout = captcha.process('1122')

//         expect(testout).to.equal(3);
        
// });

// it('number matches the next', function() {
    
//     const testout = captcha.process('1111')

//     expect(testout).to.equal(4);
    
// });

// it('no repeating number matches', function() {
    
//     const testout = captcha.process('1234')

//     expect(testout).to.equal(0);
    
// });

// it('String is circular, check for that', function() {
    
//     const testout = captcha.process('91212129')

//     expect(testout).to.equal(9);
    
// });

// // part 2

// fs.readFile('./day1/input.txt', function (err, data) {
//     if (err)
//         throw err;
//     if (data)
//         console.log('part 2: ' + captcha.moreProcess(data.toString('utf8')));
// })

// it('List contains 4 items, and all four digits match the digit 2 items ahead', function() {
    
//     const testout = captcha.moreProcess('1212')

//     expect(testout).to.equal(6);
    
// });

// it('Every comparison is between a 1 and a 2.', function() {
    
//     const testout = captcha.moreProcess('1221')

//     expect(testout).to.equal(0);
    
// });

// it('Both 2s match each other, but no other digit has a match', function() {
    
//     const testout = captcha.moreProcess('123425')

//     expect(testout).to.equal(4);
    
// });

// it('Matching cases', function() {
    
//     const testout = captcha.moreProcess('123123')

//     expect(testout).to.equal(12);
    
// });

// it('More matching cases', function() {
    
//     const testout = captcha.moreProcess('12131415')

//     expect(testout).to.equal(4);
    
// });

