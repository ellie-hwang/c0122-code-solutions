/* exported zip */
/* function: Return an Array of Arrays. Each sub-Array is a pair containing
an element from first, and an element from second, each from the
same index of their respective source Array. The "zipped" result is
only as long as the shorter of first and second
input: first array and second array
output: an array
-Create an empty array to store the values for the final array
-Create an empty array to store the subarray
-If the first array has less items than the second array, go through each item in the first array
-Start from the beginning of each input array, put the current elements in the first array and second
array into the subarray
-Put the subarray into the empty array
-Empty the storage for the subarrays after checking each item
-If the second array has less items than the first array, go through each item in the second array
-Start from the beginning of each input array, put the current elements in the first array and second
array into the subarray
-Put the subarray into the empty array
-Empty the storage for the subarrays after checking each item
*/

function zip(first, second) {
  var zipArray = [];
  var currentArray = [];
  if (first.length <= second.length) {
    for (let i = 0; i < first.length; i++) {
      currentArray.push(first[i]);
      currentArray.push(second[i]);
      zipArray.push(currentArray);
      currentArray = [];
    }
  } else if (second.length <= first.length) {
    for (let i = 0; i < second.length; i++) {
      currentArray.push(first[i]);
      currentArray.push(second[i]);
      zipArray.push(currentArray);
      currentArray = [];
    }
  }
  return zipArray;
}
