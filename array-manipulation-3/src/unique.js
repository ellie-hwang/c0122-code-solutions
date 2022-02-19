/* exported unique */

function unique(array) {
  var uniqueValues = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueValues.includes(array[i])) {
      uniqueValues.push(array[i]);
    }
  }
  return uniqueValues;
}
