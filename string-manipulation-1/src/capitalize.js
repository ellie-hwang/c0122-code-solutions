/* exported capitalize */

/* pseudocode
input: a word (string)
output: the same word with the first character capitalized (string)
-Create storage for the word that will be capitalized
-Go to first character of the input word
-Capitalize the first letter
-Go to the rest of the characters one by one
-Lowercase the rest of the characters one by one
-Put the capitalized word in storage
-Return the capitalized word */

function capitalize(word) {
  var capWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      capWord += word[i].toUpperCase();
    } else {
      capWord += word[i].toLowerCase();
    }
  } return capWord;
}
