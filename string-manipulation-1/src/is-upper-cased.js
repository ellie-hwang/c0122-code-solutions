/* exported isUpperCased */

/* pseudocode
function: return true if the input word is all uppercased, return
false if it is not all uppercased
input: word (string)
output: word (string)
-Create a variable to store a reference word
-Store the capitalized version of the word into the variable
-Compare the capitalized word to the original input word
-If they are the same, return true
-If they are not the same, return false */

function isUpperCased(word) {
  var upperWord = word.toUpperCase();
  if (word === upperWord) {
    return true;
  } else {
    return false;
  }
}
