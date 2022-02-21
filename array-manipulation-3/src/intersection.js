/* exported intersection */
/* function: Return an array with only the items the first and second array have in common
input: first array and second array
output: array of common elements in first and second array
-Create an empty array to store common elements
-Go through each item in the first array
-Check if each item in the first array matches each item in the second array
-If they match, put the item in the empty array for common elements
-Return the array of common elements
*/

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
