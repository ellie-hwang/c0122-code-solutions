/* exported isAnagram */
/* function: Check if two words are anagrams, return true or false
input: 2 words
output: true or false
-Create a storage for the first word
-Create a storage for the second word
-Take out all the spaces in the first word
  -Go through each character of the word, add the character in storage if it is not
  a space
-Take out all the spaces in the second word
  -Go through each character of the word, add the character in storage if it is not
  a space
-Separate the first word into characters and add to array
-Separate the second word into character and add to array
-Sort the arrays
-Compare the arrays
-If they are identical, return true, else return false
*/

function isAnagram(firstString, secondString) {
  var firstWordNoSp = '';
  var secondWordNoSp = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstWordNoSp += firstString[i];
    }
  }
  firstWordNoSp = firstWordNoSp.toLowerCase();
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondWordNoSp += secondString[i];
    }
  }
  secondWordNoSp = secondWordNoSp.toLowerCase();
  var firstWordCharList = firstWordNoSp.split('');
  var secondWordCharList = secondWordNoSp.split('');
  firstWordCharList = firstWordCharList.sort();
  secondWordCharList = secondWordCharList.sort();
  var firstWordCharListString = '';
  var secondWordCharListString = '';
  for (let i = 0; i < firstWordCharList.length; i++) {
    firstWordCharListString += firstWordCharList[i];
  }
  for (let i = 0; i < secondWordCharList.length; i++) {
    secondWordCharListString += secondWordCharList[i];
  }
  if (firstWordCharListString === secondWordCharListString) {
    return true;
  } else {
    return false;
  }
}
