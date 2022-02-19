/* exported zip */

function zip(first, second) {
  var zipArray = [];
  var currentArray = [];
  if (first.length <= second.length) {
    for (let i = 0; i < first.length; i++) {
      currentArray.push(first[i]);
      currentArray.push(second[i]);
      zipArray.push(currentArray);
      currentArray = [];
    }
  } else if (second.length <= first.length) {
    for (let i = 0; i < second.length; i++) {
      currentArray.push(first[i]);
      currentArray.push(second[i]);
      zipArray.push(currentArray);
      currentArray = [];
    }
  }

  // for (let i = 0; i < first.length; i++) {
  //   if (first[i] !== undefined && second[i] !== undefined) {
  //     currentArray.push(first[i]);
  //     currentArray.push(second[i]);
  //     zipArray.push(currentArray);
  //     currentArray = [];
  //   }
  // }
  return zipArray;
}
