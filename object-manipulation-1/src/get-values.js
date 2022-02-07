/* exported getValues */

/* function: To get a list of property values from an object
input: object literal
output: list (array)
-Make storage for the list of property values
-Get into the object
-Get into the object's properties
-Get each value of the property
-Add each value of the property into the storage
-Give back the list of properties from storage */

function getValues(object) {
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  }
  return values;
}
