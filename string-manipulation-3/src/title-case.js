/* exported titleCase */
/* function: Take a title and capitalize it in APA style
input: title (string)
output: title in APA style capitalization
-Lowercase the input title and store it in a variable
-Make a copy of the lowercase title
-Take the title from the copy and put each word, hyphen, and colon in a list
-Make a storage for the capitalized words (empty array)
-Make a storage for the final APA style title (empty string)
-Make a dictionary for words that shouldn't be capitalize (ex: a, for, the, of, etc)
-Go through each word of the list (array with lowercased words)
-If the word is javascript, return JavaScript and add it to the empty array for capitalized words
-If the word is api, return API and add it to the empty array for capitalized words
-If the word is the first word in the title, capitalize the first letter and put it in the array
-If the word is more than 4 letters, capitalize the first letter and put it in the array
-If the word before the current word is a colon, capitalize the first letter of the current word
and put it in the array
-If the word before or after the current word is a hyphen, capitalize the first letter of the current
word and put it in the array
-If the word is not the first word AND the word is in the dictionary, keep the word as is and add
to the array
-For all other words, capitalize the first letter of the word and add it into the array
-Now we have to take the words out of the array in order and put it into the storage for the final result
-Go through each word of the capitalized word array, add each word and a space after each word into the string
-Start from the beginning of the array
-If the word after the current word is a color, only push the word in. If the word after or before the current
word is a hyphen, only push the word in to the string
-If the word is a hyphen, only push the hyphen in
-Return the final string
*/

function titleCase(title) {
  var lcTitle = title.toLowerCase();
  var lcTitleMod = lcTitle;
  for (let i = 0; i < lcTitleMod.length; i++) {
    if (lcTitleMod[i] === ':') {
      lcTitleMod = lcTitleMod.slice(0, i) + ' ' + lcTitleMod.slice(i);
      i++;
    } else if (lcTitleMod[i] === '-') {
      lcTitleMod = lcTitleMod.slice(0, i) + ' ' + lcTitleMod.slice(i, i + 1) + ' ' + lcTitleMod.slice(i + 1);
      i++;
    }
  }
  var wordArr = lcTitleMod.split(' ');
  var titleCaseArr = [];
  var titleCaseStr = '';
  var dictionary = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === 'javascript') {
      wordArr[i] = 'JavaScript';
      titleCaseArr.push(wordArr[i]);
    } else if (wordArr[i] === 'api') {
      wordArr[i] = 'API';
      titleCaseArr.push(wordArr[i]);
    } else if (i === 0) {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    } else if (wordArr[i].length > 4) {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    } else if (wordArr[i - 1] === ':' || wordArr[i - 1] === '-' || wordArr[i + 1] === '-') {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    } else if (wordArr[i] === ':' || wordArr[i] === '-') {
      titleCaseArr.push(wordArr[i]);
    } else if (i !== 0 && dictionary.includes(wordArr[i])) {
      titleCaseArr.push(wordArr[i]);
    } else {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    }
  }
  for (let i = 0; i < titleCaseArr.length; i++) {
    if (titleCaseArr[i + 1] === ':') {
      titleCaseStr += titleCaseArr[i];
    } else if (titleCaseArr[i + 1] === '-') {
      titleCaseStr += titleCaseArr[i];
    } else if (titleCaseArr[i] === '-') {
      titleCaseStr += titleCaseArr[i];
    } else {
      titleCaseStr += titleCaseArr[i] + ' ';
    }
  }
  return titleCaseStr.slice(0, -1);
}
