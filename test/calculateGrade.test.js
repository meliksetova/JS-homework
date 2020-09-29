const calculateGrade=require('../src/calculateGrade.js')
const expect=require('chai').expect;

describe("Calculate Grade tests", () =>{

it ("verify Grade A",() =>{
expect(calculateGrade(95,100)).to.equal('A');
})

it ("verify Grade B",() =>{
expect(calculateGrade(80,100)).to.equal('B');
})

it ("verify Grade C",() =>{
expect(calculateGrade(75,100)).to.equal('C');
})

it ("verify Grade D",() =>{
expect(calculateGrade(67,100)).to.equal('D');
})  

it ("verify Grade F",() =>{
expect(calculateGrade(40,100)).to.equal('F');
})


it ("verify score cannot be more than maximum",() =>{
expect(calculateGrade(120,100)).to.equal(`Student score can't greater than max score !`);
})

it ("verify student score can not be negative",() =>{
    expect(calculateGrade(-50,100)).to.equal(`Score can't be negative!`);
})

it ("verify max score can not be negative",() =>{
    expect(calculateGrade(120,-50)).to.equal(`Score can't be negative!`);
})

it ("verify can pass only numbers",() =>{
    expect(calculateGrade('gfshg','gdfafhg')).to.equal(`I can only work with numbers!`);
})  


})