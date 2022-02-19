/* exported difference */

function difference(first, second) {
  var concatArray = first.concat(second);
  var intersectArray = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        intersectArray.push(first[i]);
      }
    }
  }
  for (let i = 0; i < concatArray.length; i++) {
    for (let j = 0; j < intersectArray.length; j++) {
      if (concatArray[i] === intersectArray[j]) {
        concatArray.splice(i, 1);
      }
    }
  }
  return concatArray;
}
