/* exported isLowerCased */

/* pseudocode
function: return true if the input word is all lowercased, return
false if it is not all lowercased
input: word (string)
output: word (string)
-Create a variable to store a reference word
-Store the lowercased version of the word into the variable
-Compare the lowercased word to the original input word
-If they are the same, return true
-If they are not the same, return false */

function isLowerCased(word) {
  var lowerWord = word.toLowerCase();
  if (lowerWord === word) {
    return true;
  } else {
    return false;
  }
}
