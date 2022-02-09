/* exported capitalizeWords */
/* function: Capitalize the first character of every word in a sentence
input: sentence (string)
output: sentenct (string)
-Create a storage for the list of lowercased words
-Create a storage for the current word that will be put into the list
-Create a storage for the final sentence with capitalized first characters
-Got through each character of the sentence
-Change each character to lowercase
-If the character is a space, put the current word into list storage
-Clear out the current word
-Access the word in the list storage
-Access the first letter of the word in the list storage
-Capitalize the first letter
-Put it in the final sentence
-Put the rest of the unedited characters into the final sentence storage
-Put a space in final storage after putting in each word
-Continue this process until the end of the final word
-Give back the final sentence from storage
*/

function capitalizeWords(string) {
  var wordList = [];
  var currentWord = '';
  var capWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i].toLowerCase();
    } else {
      wordList.push(currentWord);
      currentWord = '';
    }
  }
  wordList.push(currentWord);
  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      if (j === 0) {
        capWord += wordList[i][j].toUpperCase();
      } else {
        capWord += wordList[i][j];
      }
    }
    capWord += ' ';
  }
  return capWord.slice(0, -1);
}
