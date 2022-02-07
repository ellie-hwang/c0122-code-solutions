/* exported tail */

/* function: To get a list with everything except the
first item in the input list while maintaining original order
input: list (array)
output: list (array)
-Make a storage for the new list
-Ignore the first item in the input list
-Go though each item in the list in order
-Add the items to the new list
-Give back the new list */

function tail(array) {
  var newList = [];
  for (let i = 1; i < array.length; i++) {
    newList.push(array[i]);
  }
  return newList;
}
