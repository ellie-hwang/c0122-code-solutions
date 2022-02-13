/* exported invert */

function invert(source) {
  var invertObj = {};
  var invertKeys = Object.values(source);
  var invertValues = Object.keys(source);
  for (let i = 0; i < Object.keys(source).length; i++) {
    if (JSON.stringify(invertKeys[i]) === 'Null') {
      invertKeys[i] = 'NaN';
    }
    invertObj[invertKeys[i]] = invertValues[i];
  }
  return invertObj;
}
