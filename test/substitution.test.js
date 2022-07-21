// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution", () => {    
    
 it('should return false if alphabet is null', () => {
    const actual = substitution("test");
    expect(actual).to.be.false;
 })
 it("should return false if alphabet does not equal 26 characters", () => {
    const actual = substitution("test");
     expect(actual).to.be.false;
 })
 it("should ignore capital letters", () => {
    const actual = substitution("TEST","xoyqmcgrukswaflnthdjpzibev");
    const expected = "jmdj"
    expect(actual).to.equal(expected);
 })
it("should encode a message by using the given alphabet", () => {
    const actual = substitution("test","xoyqmcgrukswaflnthdjpzibev" );
    const expected = "jmdj";
    expect(actual).to.equal(expected);
 })
it("should work with any unique characters", () => {
    const actual = substitution("test", "xoyqmcgrukswaflnth$jpzibev");
    const expected = "jm$j";
    expect(actual).to.equal(expected);
})
it("should allow for spaces", () => {
    const actual = substitution("this is a test", "xoyqmcgrukswaflnthdjpzibev")
    const expected = "jrud ud x jmdj";
    expect(actual).to.equal(expected);
})
});




