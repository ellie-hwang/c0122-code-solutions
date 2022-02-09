/* exported numVowels */
/* function: Return the number of total vowels in a given sentence or word
input: a word or sentence (string)
output: number (number)
-Create storage for the number of vowels, it starts at zero
-Go through each character of the sentence
-If the character is an A, E, I, O, U, a, e, i, o, OR u then add one to the count
in storage
-After finishing going through each character, give back the count in storage */

function numVowels(string) {
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' ||
     string[i] === 'U' || string[i] === 'a' || string[i] === 'e' || string[i] === 'i' ||
     string[i] === 'o' || string[i] === 'u') {
      count++;
    }
  }
  return count;
}
