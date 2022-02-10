/* exported chunk */
/* function: To return arrays of a specific size
input: a list and number (array and number)
output: a list (array)
-Create a storage for a copy of the list
-Create a storage for the smaller array of the specified size (number)
-Go through each item in the list and add it into the storage
-Take the copy of the copy of the list, and go through each item
-Make a new storage (reinitialize the array each time to clear it out)
-Take the specified number of items and put them into the storage
-Put the chunked array into the storage that will hold all the chunked arrays
-Return the array of arrays from storage
*/
function chunk(array, size) {
  var arrayCopy = [];
  var chunkArray = [];

  for (let i = 0; i < array.length; i++) {
    arrayCopy.push(array[i]);
  }

  for (let i = 0; i < arrayCopy.length; i += size) {
    var chunk = arrayCopy.slice(i, i + size);
    chunkArray.push(chunk);
  }
  return chunkArray;
}
