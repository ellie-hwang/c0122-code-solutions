/* exported swapChars */
/* function: Swap the two characters specified by the input and return the word with
swapped characters
input: the position of the first character, the position of the second character,
the sentence (number, number, string)
output: a sentence (string)
-Create a storage for the word with swapped characters
-Go through each character of the given word starting from the beginning
-If the character you are on matches the swap position specified by the input, add
the character that must take its place into storage
-If the character you are on does not match the swap position specified by the input,
add the character into storage
-Give back the word with swapped letters from storage
*/

function swapChars(firstIndex, secondIndex, string) {
  var swapWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapWord += string[secondIndex];
    } else if (i === secondIndex) {
      swapWord += string[firstIndex];
    } else {
      swapWord += string[i];
    }
  }
  return swapWord;
}
