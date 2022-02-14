/* exported equal */

function equal(first, second) {
  var equal = null;
  if (first.length !== second.length) {
    equal = false;
    return equal;
  } else if (first.length === 0 && second.length === 0) {
    equal = true;
    return equal;
  } else if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        equal = true;
      } else {
        equal = false;
        return equal;
      }
    }
  }
  return equal;
}
