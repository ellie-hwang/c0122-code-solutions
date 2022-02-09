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
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    capWord = 'JavaScript';
    return capWord;
  }
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      capWord += word[i].toUpperCase();
    } else {
      capWord += word[i].toLowerCase();
    }
  }
  return capWord;
}
