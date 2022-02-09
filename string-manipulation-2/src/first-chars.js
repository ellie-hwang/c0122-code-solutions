/* exported firstChars */
/* function: Return the first specified number of characters for a given word
input: a sentence (string)
output: part of a sentence (string)
-create a storage for shortened sentence
-if there is no word or sentence, give back an empty sentence
-get the first specified number of characters of the given word/sentenct
-put that shortened sentence into storage
-give back the shortened sentence from storage
*/

function firstChars(length, string) {
  var shortSentence = '';
  if (string === '') {
    shortSentence = '';
  } else {
    shortSentence = string.slice(0, length);
  }
  return shortSentence;
}
