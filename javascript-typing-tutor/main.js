var $spans = document.querySelectorAll('span');

document.addEventListener('keydown', takeTypeTest);

var $index = 0;

function takeTypeTest(event) {
  if (event.key === $spans[$index].textContent && $index !== 33) {
    $spans[$index].className = 'green-txt';
    $spans[$index + 1].className = 'border-bottom';
    $index++;
  } else if (event.key === $spans[$index].textContent && $index === 33) {
    $spans[$index].className = 'green-txt';
    $index++;
  } else {
    $spans[$index].className = 'red-txt red-border-bottom';
  }
  if ($index === 34) {
    document.removeEventListener('keydown', takeTypeTest);
  }
}
