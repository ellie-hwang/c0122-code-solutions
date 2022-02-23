var $countdownDisplay = document.querySelector('.countdown-display');
var $startingNumber = parseInt($countdownDisplay.textContent);

function countdownDisplay() {
  if ($startingNumber !== 1) {
    $startingNumber--;
    $countdownDisplay.textContent = $startingNumber;
  } else if ($startingNumber === 1) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervId);
  }
}

var intervId = setInterval(countdownDisplay, 1000);
