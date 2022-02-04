/* exported getWords */

/* function: to retrieve a list of words in a sentence
input: sentence (string)
output: word list (array)
-create storage for list of words
-create storage for current word
-Check if the word is there, if not return an empty list
-If there is a word, look at each character one at a time
-if current character is not a space, add letter to current word
-if current character is a space, add current word to list of words
-clear the current word
-add final word to list of words
-give back list of words */

function getWords(string) {
  var wordList = [];
  var currentWord = '';
  if (string === '') {
    return wordList;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      wordList.push(currentWord);
      currentWord = '';
    }
  } wordList.push(currentWord);
  return wordList;
}
