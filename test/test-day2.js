const expect  = require('chai').expect;
const checksum = require('./../day2/checksum');

const fs = require('fs');

// part 1

// fs.readFile('./day2/input.txt', function (err, data) {
//     if (err)
//         throw err;
//     if (data)
//         console.log('part 1: \n\r' + checksum.process(data.toString('utf8')));
// })

// it('Find the diffence between largest and smallest values.', function() {
    
//     const testout = checksum.difference([5,1,9,5])

//     expect(testout).to.equal(8);
    
// });

// it('Find the diffence between largest and smallest values on each row, then sum the values.', function() {
    
//     const testout = checksum.process('5 1 9 5\n7 5 3\n2 4 6 8')

//     expect(testout).to.equal(18);
// });

// // part 2

// fs.readFile('./day2/input.txt', function (err, data) {
//     if (err)
//         throw err;
//     if (data)
//         console.log('part 2: \n\r' + checksum.moreProcess(data.toString('utf8')));
// })

// it('Find the evenly divisible values and divide them.', function() {
    
//     const testout = checksum.divisible([3,8,6,5])

//     expect(testout).to.equal(2);
// });

// it('Find these and evenly divisible values and divide them.', function() {
    
//     const testout = checksum.divisible([1224, 343, 1039, 126, 1221, 937, 136, 1185, 1194, 1312, 1217, 929, 124, 1394, 1337, 168])
   
//     expect(testout).to.equal(9);
// });

// it('Find the evenly divisible values on each row and divide them, then sum the values.', function() {
    
//     const testout = checksum.moreProcess('5 9 2 8\n9 4 7 3\n3 8 6 5')

//     expect(testout).to.equal(9);
// });

