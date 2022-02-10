/* exported includes */
/* function: To check if an item is in a given list
input: a list and item (array and value)
output: true or false (boolean)
-Check if each item in the given list matches the given value
-If there is a match, return true
-If there is no match, return false
*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
