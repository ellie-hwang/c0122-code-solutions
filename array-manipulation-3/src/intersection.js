/* exported intersection */

function intersection(first, second) {
  var intersectArray = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        intersectArray.push(first[i]);
      }
    }
  }
  return intersectArray;
}
