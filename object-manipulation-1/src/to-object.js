/* exported toObject */

/* function: To create an object with a give property name and property value
input: property name and value pair (array)
output: object with property and value
-Make a storage for the new object
-Make a storage for the property name
-Make a storage for the property value
-Give the object the property in storage
-Assign the value of the property value in storage to the object's property
-Give back the object */

function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  object[key] = value;
  return object;
}
