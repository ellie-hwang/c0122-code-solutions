/* exported reverseWords */
/* 'follow your passion', reverse 'wollof ruoy noissap'
function: Reverses characters in the words in the sentence but maintain the order of the words
input: string
output: string in reverse
-Create a storage for the list of words that will be reverse (array)
-Create a storage for the current word that will have reverse characters (string)
-Put each word in the input string inside the list.
-Take each word in the list, go through each character of the word starting from the
last character, add each character into storage
-Take the word in storage and push it into the list of words (replace the word before it)
-Once all the words in the list are reversed, add each word into another storage with spaces
in between (exept the last word) starting from the first word in the list.
-Return the value of the reversed string
*/

function reverseWords(string) {
  var wordsArray = string.split(' ');
  var currentWord = '';
  var reverseSentence = '';
  for (let i = 0; i < wordsArray.length; i++) {
    for (let j = wordsArray[i].length - 1; j >= 0; j--) {
      currentWord += wordsArray[i][j];
    }
    wordsArray[i] = currentWord;
    currentWord = '';
  }
  for (let i = 0; i < wordsArray.length; i++) {
    reverseSentence += wordsArray[i] + ' ';
  }
  return reverseSentence.slice(0, -1);
}

var string = 'follow your passion';
reverseWords(string);
