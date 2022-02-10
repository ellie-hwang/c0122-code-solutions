/* exported drop */
/* function: Drop the first 'n' items of a list, n specified by the input
input: a list and number (array and number)
output: a list (array)
-Make a storage for the list
-Go through each item in the list skipping the first 'n' items in the list
-Put the each item in storage
-Return the list of items in storage
*/

function drop(array, count) {
  var dropArray = [];
  for (let i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
