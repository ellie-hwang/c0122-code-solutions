/* exported pick */
/* if the value of the key is undefined, do not add it */
/* function: Creates an object composed of the picked source properties.
input: an object (source) and an array of keys (keys)
output: a new object with only the keys in the input array with its respective
values from the object
-Create storage for the new empty object
-Go through each key in the input array
-If the key is in the source object and the value of the key in the source object
is not undefined, add the key into the new object with its respective value
-Return the new object
*/

function pick(source, keys) {
  var newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
