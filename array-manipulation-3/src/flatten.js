/* exported flatten */

function flatten(array) {
  var flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== undefined) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else if (array[i].length === undefined) {
      flatArray.push(array[i]);
    }
  } return flatArray;
}
