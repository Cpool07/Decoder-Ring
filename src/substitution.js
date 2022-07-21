// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
 
  // variable to hold our alphabet key as an array
   const alphabetKey = ("abcdefghijklmnopqrstuvwxyz").split("");
 
  // variable to hold our empty array
   const resultArray = [];

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //if alphabet is missing or does not equal 26, return false
    if(!alphabet || alphabet.length != 26) return false;

    // using Set to find and store unique characters
    let uniqueAlpha = new Set(alphabet);
    // if alphabet doesnt contain unique characters, return false
    if([...uniqueAlpha].length != 26) return false;


    // variable to hold the alphabet parameter as an aray
    let alphaArray = alphabet.split('');
    

    // if encoding, loop through the array
    if(encode) {
      for (let i = 0; i < alphabetKey.length; i++)
       resultArray[alphabetKey[i]] = alphaArray[i];
       //console.log('ENCODE', resultArray[alphabetKey[i]] = alphaArray[i]);

    // if decoding, loop through the array     
    } else {
      for(let i = 0; i < alphaArray.length; i++) {
        resultArray[alphaArray[i]] = alphabetKey[i];
        //console.log('DECODE', resultArray[alphaArray[i]] = alphabetKey[i]);
      };
    }
    let result = input.toLowerCase().split('').map((letter) => {
      if(letter === " ") return " ";
      return resultArray[letter];
    })
    return result.join('')

  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
