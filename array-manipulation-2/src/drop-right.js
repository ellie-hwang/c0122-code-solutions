/* exported dropRight */
/* function: To return a list without the last 'n' items of the original input list
input: list and number (array and count)
output: list (array)
-Make a storage for the desired items in the list
-If the specified count is more than the number of items in the list,
return the original list
-Go through each item of the list stopping before you reach the items you do not want
in the new list
-Add each item into storage
-Give back the list in storage
*/

function dropRight(array, count) {
  var dropArray = [];
  if (count > array.length) {
    return array;
  }
  for (let i = 0; i < array.length - count; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
