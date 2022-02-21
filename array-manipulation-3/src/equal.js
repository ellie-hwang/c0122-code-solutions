/* exported equal */
/* function: Return true if the first array is identical to the second array, return false
if the first array is not identical to the second array
input: first array and second array
output: true or false
-Make a storage for the boolean value
-If the first array's length is not equal to the second array's length, return false
-If the first array and the second array are empty, return true
-If the first array and the second array have the same number of items, go through each
item in the first array
-Compare each item of the first array to each item of the second array
-If an item does not match, return false (exit the function immediately)
-If all the items match, return true
*/

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
