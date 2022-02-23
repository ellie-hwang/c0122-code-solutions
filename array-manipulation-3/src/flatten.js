/* exported flatten */
/* function: Return a new Array with any direct child Arrays unwrapped. This function should only "flatten" array by one level.
input: an array
output: a flattened array
-Make an empty array to store the flattened array
-Go through each item of the input array:
-If the item in the array is not an array, put the item in the storage as is
-If the item in the array has a length, push the item in the nested array into the
storage for the flattened array
-If the item in the array does not have a length, push the item as is into the storage
-Return the flattened array from storage
*/
function flatten(array) {
  var flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flatArray.push(array[i]);
    } else if (array[i].length !== undefined) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else if (array[i].length === undefined) {
      flatArray.push(array[i]);
    }
  } return flatArray;
}
