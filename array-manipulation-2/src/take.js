/* exported take */
/* function: To return a list with the first 'n' items of the input list
input: a list and number (array and number)
output: a list (array)
-Create a storage for the new list
-If the count is larger that the amount of items in the input list, return
the original list
-Go through each item in the input list, stop when you reach the item you do not want in the list
-Add each item into the storage
-Return the list from storage
*/

function take(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (let i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
