const moveAllZerosToTheEnd =require('../src/moveAllZerosToTheEnd')
const expect=require('chai').expect;


describe("Move all zeroes to the end ",() =>{


it("Verify length of the array is the same",() =>{
let numbers=[0, 1, 0, 3, 12];   
const numLen=numbers.length;
expect(moveAllZerosToTheEnd(numbers)).to.equal(numLen);
})

})
