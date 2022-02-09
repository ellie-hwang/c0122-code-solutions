/* exported lastChars */
/* function: Return the last specified number of characters for a given word
input: a sentence (string)
output: part of a sentence (string)
-create a storage for shortened sentence
-if there is no word or sentence, give back an empty sentence
-if the number of characters specified by length is greater than the number
of character in the given sentence, return the original sentence
-get the last specified number of characters of the given word/sentenct
-put that shortened sentence into storage
-give back the shortened sentence from storage
*/

function lastChars(length, string) {
  var shortSentence = '';
  if (string === '') {
    shortSentence = '';
  } else if (length > string.length) {
    shortSentence = string;
  } else {
    shortSentence = string.slice(string.length - length);
  }
  return shortSentence;
}
