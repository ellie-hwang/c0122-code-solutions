/* exported truncate */

/* function: To shorten a sentence to a specific width
input: number of characters and sentence (string)
output: sentence (string)
-Make a storage for the new sentence
-Go to the start of the sentence
-Take each character and put it in storage
-Stop putting the character in storage once the amount of characters in storage
matches the specified length in the input
-Return the sentence that is in storage */

function truncate(length, string) {
  var shortened = '';
  if (string.length <= length) {
    shortened = string + '...';
    return shortened;
  }
  shortened = string.slice(0, length);
  return shortened + '...';
}
