/* exported isVowel */

/* pseudocode
function: to return true if a character is a vowel, to return false
if a character is not a vowel
input: a character (string)
output: true or false
-Check if the character is an 'a', 'e', 'i', 'o', 'u', 'A', 'E',
'I', 'O' OR 'U'
-Compare the character to each vowel
-If the character is a vowel, return true. If not, return false */

function isVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  } return false;
}
