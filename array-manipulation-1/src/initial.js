/* exported initial */

/* function: to get a list without the last item of the input list
while maintining the order or the original list
input: list (array)
output: list (array)
-Make a storage for the list
-Go through each item of the list starting from the beginning
-Add each item of the list into storage in order
-Ignore the last item of the list
-Give back the list from storage */

function initial(array) {
  var newList = [];
  for (let i = 0; i < array.length - 1; i++) {
    newList.push(array[i]);
  } return newList;
}
