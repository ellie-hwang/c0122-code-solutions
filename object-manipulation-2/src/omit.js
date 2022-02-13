/* exported omit */
/* function: to return an object with the omitted keys and key values that are NOT in the
keys paramter
input: object and keys
output: object
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
