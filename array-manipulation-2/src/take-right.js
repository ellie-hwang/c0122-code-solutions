/* exported takeRight */
/* function: To return a list with the last 'n' items of the input list
input: a list and number (array and number)
output: a list (array)
-Make a storage for the output list
-If the count is larger than the number of items in the list, return the original list
-Go through the items in the array, starting from the item that you want to keep
-Add each item into storage
-Return the list from storage
*/

function takeRight(array, count) {
  var takeArray = [];
  if (count > array.length) {
    return array;
  }
  for (let i = array.length - count; i < array.length; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
