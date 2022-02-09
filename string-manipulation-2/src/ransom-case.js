/* exported ransomCase */
/* function: To return a word with mixed casing: first character is lowercase,
second character is uppercase, and so on
input: a word (string)
output: a word (string)
-create storage for word with ransom casing
-go through each character of the word
-if the character is in an odd position, change the case to lowercasing
-add the character to the storage
-if the character is in an even position, change the case to uppercasing
-add the character to the storage
-do this for each character
-give back the word in storage */

function ransomCase(word) {
  var ransomWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      ransomWord += word[i].toLowerCase();
    } else {
      ransomWord += word[i].toUpperCase();
    }
  }
  return ransomWord;
}
