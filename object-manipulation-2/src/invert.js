/* exported invert */

function invert(source) {
  var invertObj = {};
  var invertValues = Object.values(source);
  // console.log(invertValues);
  var invertKeys = Object.keys(source);
  // console.log(invertKeys);
  for (let i = 0; i < Object.keys(source).length; i++) {
    invertObj[invertKeys[i]] = invertValues[i];
  }
  // console.log(invertObj);
  return invertObj;
}

var source = {
  age: 'bloop',
  occupation: 'programmer',
  language: 'JavaScript'
};

invert(source);
