/* exported setValue */

/* function: To assign a value to an object's property
input: object, property name, preoperty value
output: property value
-Assign the property value to the object's property name
-Give back the value of object's property */

function setValue(object, key, value) {
  object[key] = value;
  return object[key];
}
