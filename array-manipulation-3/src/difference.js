/* exported difference */
/* function: A new Array containing the symmetric difference
between first and second. That is, elements are included if
they are found in one Array, but not the other. The result values
are unqiue and their order is determined by the order they occur.
input: first array, second array
output: array with the elements that are in first array and second array but NOT in both
-Make an array with all the items in the first array and all the items in the second array
-Find all the items that are in both the first array and the second array and put it inside
another array (intersectArray)
-Go through each item in the concatenated array.
-Compare each item in the concatenated array to each item in the intersect array
-Take out the item from the contatenated array if that item is in the intersect array
-Return the modified concatenated array
*/

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
