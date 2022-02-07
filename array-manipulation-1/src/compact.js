/* exported compact */

/* function: To get a list without any false, null, NaN, 0, -0 as values in the list
input: list (array)
output: list (array)
-Make a storage for the compacted list
-Go through each item in the list
-Check if each item is a falsy value
-If the item is not a falsy value, add it to the storage
-After the last item is checked and added/not added, give back the list from
storage */

function compact(array) {
  var newList = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      newList.push(array[i]);
    }
  }
  return newList;
}
