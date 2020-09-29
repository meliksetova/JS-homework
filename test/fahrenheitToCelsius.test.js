const fahrenheitToCelsius=require('../src/fahrenheitToCelsius')
const expect=require('chai').expect;


describe("Convert fahrenheitToCelsius",() =>{


it("verify temperature is converted",() =>{
expect(fahrenheitToCelsius(90)).to.include(`°C`);
})

it("verify cannot pass empty",() =>{
expect(fahrenheitToCelsius()).to.equal("Please enter an temperature");
})

it("verify can not pass with wrong type",() =>{
expect(fahrenheitToCelsius('gfghahfgh')).to.equal("Please enter a number");
})


})
