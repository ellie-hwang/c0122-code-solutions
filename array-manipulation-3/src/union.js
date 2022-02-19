/* exported union */

function union(first, second) {
  var uniqueValues = [];
  for (let i = 0; i < first.length; i++) {
    if (!uniqueValues.includes(first[i])) {
      uniqueValues.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!uniqueValues.includes(second[i])) {
      uniqueValues.push(second[i]);
    }
  }
  return uniqueValues;
}
