/* exported omit */
/* function: to return an object with the omitted keys and key values that are NOT in the
keys parameter
input: object and an array of keys
output: object without the keys in the input array
-Make a copy of the source object and store it in a variable
-Go through each item in the input array
-If the item (key) is in the copy, remove it from the copy object
-Return the new object with ommitted keys
*/

function omit(source, keys) {
  var omitObj = { ...source };
  // debugger;

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in omitObj) {
      delete omitObj[keys[i]];
    }
  }
  return omitObj;
}
