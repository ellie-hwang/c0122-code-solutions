/* exported defaults */
/* function: Assigns properties of source object to the target object for all properties that are not defined on target.
If target is an empty object, return target
input: target object and source object
output: target object
-Go through each property in the source object
-Check if the property in the source object is a property in the target object and
check to see if target is an empty object
-If no, then add the property and its value into the target object
-If yes, then do not do anything
-After going checking all the properties in source and comparing it to target object,
return the modified target object
*/

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target) && target !== {}) {
      target[key] = source[key];
    }
  }
  return target;
}
