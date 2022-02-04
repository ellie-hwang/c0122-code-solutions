/* exported countdown */
function countdown(number) {
  var array = [];
  var i = number;
  while (i >= 0) {
    array.push(i);
    i--;
  }
  return array;
}
