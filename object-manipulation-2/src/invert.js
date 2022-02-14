/* exported invert */
/* function: Creates an object composed of the inverted keys and values of source.
input: an object
output: an object with inverted keys and values of the input object
-Make a storage for the new object
-Put all the input object's keys in an array, these will be the new object's key
values
-Put all the input object's values in an array, these will be the new object's keys
-For each item in the new object's key list, assign its respective key value to it
-Return the new object
*/

function invert(source) {
  var invertObj = {};
  var invertKeys = Object.values(source);
  var invertValues = Object.keys(source);
  for (let i = 0; i < Object.keys(source).length; i++) {
    if (invertKeys[i] === 'Null') {
      invertKeys[i] = 'NaN';
    }
    invertObj[invertKeys[i]] = invertValues[i];
  }
  return invertObj;
}
