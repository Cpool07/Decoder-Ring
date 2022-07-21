// Write your tests here!

const { caesar }= require("../src/caesar");
const { expect } = require("chai");


describe('caesar',() =>{
        it("should return false if shift value is above 25",() => {
            const actual = caesar("test", 26);
            expect(actual).to.be.false
        })
        it("should return false if shift value is below -25",() => {
            const actual = caesar("test", -26);
            expect(actual).to.be.false
        })
        it("should return false if shift value is 0",() => {
            const actual = caesar("test", 0);
            expect(actual).to.be.false
        })
        it('should ignore capital letters',() =>{
            const expected = 'abc'
            const actual = caesar("xyz", 3)
            expect(actual).to.equal(expected)
        })
        it('should keep spaces and special characters',() =>{
            const expected = 'w! w'
            const actual = caesar('t! t',3)
            expect(actual).to.equal(expected)
        })
        it('should adjust for going beyond the alphabet', () =>{
            const expected = 'bcab'
            const actual = caesar('zayz',2)
        })
    })
