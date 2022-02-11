var $spans = document.querySelectorAll('span');
var $typeTest = document.querySelector('.type-test');
// console.log('$typeTest: ', $typeTest);
// console.log('$spans: ', $spans);

$typeTest.addEventListener('keydown', takeTypeTest);

function takeTypeTest(event) {
  if (event.keyCode === 'M') {
    $spans[0].className = 'green-txt';
  }
}
