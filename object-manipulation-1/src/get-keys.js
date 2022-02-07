/* exported getKeys */

/* function: To get a list properties/keys of an object
input: object literal
output: list (array)
-Make storage for the list of properties
-Get into the object
-Take each property
-Add each property to the storage
-Give back the list of properties in the storage */

function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
  }
  return keys;
}
