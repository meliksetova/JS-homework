const anagramOrNot=require('../src/anagramOrNot')
const expect=require('chai').expect;


describe("Check if words are anagrams or not",() =>{


it("Verify that will not pass if words are different length",() =>{
expect(anagramOrNot('house','cat')).to.equal('Words have different length');
})


it("Verify that it will pass if words is anagrams",() =>{
expect(anagramOrNot('anagram','nagaram')).to.equal('true');
})
        
it("Verify that will not pass if words are not anagrams",() =>{
expect(anagramOrNot('cat','rat')).to.equal('false');
})     

})