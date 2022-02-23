/* exported unique */
/* function: Return a new Array containing unique values from the input array
output: array with unique elements in both first and second array
-Create an empty array to store the new array
-Go through each item of the input array
-If the item is not in the empty array, add the item to the empty array
-Return the new array
*/

function unique(array) {
  var uniqueValues = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueValues.includes(array[i])) {
      uniqueValues.push(array[i]);
    }
  }
  return uniqueValues;
}
