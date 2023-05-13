const palindromes = function(word){
  let reversed = word.split("").reverse().join("");
  reversed = reversed.replace(/[^a-z0-9]/gi, '');
  reversed = reversed.replace(/\s/g, '');
  reversed = reversed.toLowerCase()
  word = word.toLowerCase()
  word = word.replace(/[^a-z0-9]/gi, '');
  word = word.replace(/\s/g, '');
  return word == reversed
}

// Do not edit below this line
module.exports = palindromes;
