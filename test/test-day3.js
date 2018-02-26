const expect  = require('chai').expect;
const spiral = require('./../day3/spiral');

// part 1

console.log('part 1: \n\r' + spiral.distance(spiral.coordinates(361527)));

it('Find the cartesian coordinates of given int values.', function() {  
    const testoutOne = spiral.coordinates(1)
    const testoutTwo = spiral.coordinates(12)
    const testoutThree = spiral.coordinates(23)
    const testoutFour = spiral.coordinates(1024)
    expect(testoutOne).to.eql([0,0]);
    expect(testoutTwo).to.eql([2,1]);
    expect(testoutThree).to.eql([0,-2]);
    expect(testoutFour).to.eql([-15,16]);
});

it('Finds the distance to the center of the number spiral.', function() {
    const testoutOne = spiral.distance([0,0])
    const testoutTwo = spiral.distance([2,1])
    const testoutThree = spiral.distance([0,-2])
    const testoutFour = spiral.distance([-15,16])
    expect(testoutOne).to.eql(0);
    expect(testoutTwo).to.eql(3);
    expect(testoutThree).to.eql(2);
    expect(testoutFour).to.eql(31);    
});