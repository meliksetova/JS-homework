const totalsWithSalesTax=require('../src/totalsWithSalesTax')
const expect=require('chai').expect;


describe("Add taxes to Totals",() =>{


it("verify cannot pass if one of the totals is empty",() =>{
let numbers =[342, ,523]
expect(totalsWithSalesTax(numbers)).to.equal("Please provide all totals");
})


it("verify cannot pass if one of the totals is not a number",() =>{
let numbers =[342,'gfhafg',523]
expect(totalsWithSalesTax(numbers)).to.equal("Please provide a numbers");
})


it("verify that it is returns same length of the array",() =>{
let numbers =[342,1002,523];
let numLen=numbers.length;
expect(totalsWithSalesTax(numbers)).to.equal(numLen);
})







})