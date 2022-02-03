/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  for (let i = 0; i < words.length; i++) {
    array.push(words[i] + suffix);
  }
  return array;
}
