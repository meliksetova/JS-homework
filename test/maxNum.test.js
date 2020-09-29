const maxNum=require('../src/maxNum')
const expect=require('chai').expect;

describe('Log in results',() =>{


it("verify results is printed",() =>{
maxNum(20); 
})

it("verify can not pass with negative number",() =>{
expect(maxNum(-50)).to.equal('Please provide a number that more than 0');
})

it("verify can not pass without number",() =>{
expect(maxNum()).to.equal('Please provide a number');
})

it("verify can not pass with wrong type",() =>{
expect(maxNum('gghg')).to.equal("Please enter a number ");

})  
})
