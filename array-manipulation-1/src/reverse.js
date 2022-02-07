/* exported reverse */

/* function: To get a list in reverse order
input: list (array)
output: list (array)
-Make a storage for the list that will be in reverse order
-Go to the last item of the list
-Starting from the last item, take each item and put it into the starage
-Give back the list from storage */

function reverse(array) {
  var newList = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newList.push(array[i]);
  }
  return newList;
}
