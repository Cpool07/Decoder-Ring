// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const codeStart = input.toLowerCase();
    let coding = [];
    let codeFinish;
    // Should return false if less than -25, more than 25, or equal to zero
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    // if the encode is false, it is a decode so the shift needs shift the opposite direction
    if (!encode) {
      shift *= -1;
    }
    //this loop iterates through the string and converts it to a number,
    //then shifts, then converts it back.
    for (let i = 0; i < codeStart.length; i++) {
      let partial = codeStart.charCodeAt([i]);
      //handles if the value is a special char or space
      if (partial < 97) {  
        coding.push(partial);
      } else if (partial + shift > 122) {
        partial -= 26;
        coding.push(partial + shift);
      } else if (partial + shift < 97) {
        partial += 26;
        coding.push(partial + shift);
      } else {
        coding.push(partial + shift);
      }
    }
    codeFinish = String.fromCharCode(...coding);
    return codeFinish;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };