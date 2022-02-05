/* exported getValue */

/* function: To get the value assigned to a property in an object
input: object and key
output: value of the key
-Go into the object
-Go into the object's property
-Give back the value of that object's property */

function getValue(object, key) {
  return object[key];
}
