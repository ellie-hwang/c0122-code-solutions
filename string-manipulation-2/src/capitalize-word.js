/* exported capitalizeWord */
/* function: Return a word with the first character capitalized
input: word (string)
output: word (string)
-create a storage for the new capitalized word
-go through each character of the word from the first character
-capitalize the first character, put the character into storage
-lowercase each subsequent character, put the character into storage
-give back the capitalized word from storage
*/

function capitalizeWord(word) {
  var capWord = '';
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    capWord += 'JavaScript';
    return capWord;
  }
  for (let i = 0; i < lowerCase.length; i++) {
    if (i === 0) {
      capWord += lowerCase[i].toUpperCase();
    } else {
      capWord += lowerCase[i];
    }
  }
  return capWord;
}
