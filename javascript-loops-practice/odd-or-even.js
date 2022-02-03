/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  } return array;
}
