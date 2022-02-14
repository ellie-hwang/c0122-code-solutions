/* exported isPalindromic */
/* function: checks if a word is a palindrome and returns true or false
input: string
output: boolean
-Make a storage for a copy of the word, make sure to take out any spaces
-Make another storage for the word in reverse order
-To reverse the order of the word, go to the last character in the copy of the word
-Add each character to the storage for the reverse word starting from the last character
-Compare the copy with it's word in reverse. If they are identical, return true. If not
return false */

function isPalindromic(string) {
  var copy = '';
  var copyReverse = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      copy += string[i];
    }
  }
  for (let i = copy.length - 1; i >= 0; i--) {
    copyReverse += copy[i];
  }
  if (copy === copyReverse) {
    return true;
  } else {
    return false;
  }
}
