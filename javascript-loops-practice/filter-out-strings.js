/* exported filterOutStrings */
function filterOutStrings(values) {
  var output = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      output.push(values[i]);
    }
  } return output;
}
