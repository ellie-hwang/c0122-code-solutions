/* exported union */
/* function: Return a new Array containing unique values from both first and second
input: first array and second array
output: array with unique elements in both first and second array
-Create an empty array to store the new array
-Go through each item of the first array
-If the item is not in the empty array, add the item to the empty array
-Go through each item of the second array
-If the item is not in the storage array, add the item to the storage array
-Return the new array
*/

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
