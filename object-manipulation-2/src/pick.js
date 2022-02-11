/* exported pick */
/* if the value of the key is undefined, do not add it */

function pick(source, keys) {
  var newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
