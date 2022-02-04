/* exported reverseWord */

/* function: to return a word with its characters in reverse order
input: word (string)
output: word (string)
-Make an empty storage for the reversed word
-Take the last character of the input word
-Put the character into storage
-Take each subsequent character and put into storage
-Give back the word that is in storage */

function reverseWord(word) {
  var revWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  } return revWord;
}
