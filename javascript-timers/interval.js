var $countdownDisplay = document.querySelector('.countdown-display');

function countdownDisplay() {
  if ($countdownDisplay.textContent === '4') {
    $countdownDisplay.textContent = '3';
  } else if ($countdownDisplay.textContent === '3') {
    $countdownDisplay.textContent = '2';
  } else if ($countdownDisplay.textContent === '2') {
    $countdownDisplay.textContent = '1';
  } else if ($countdownDisplay.textContent === '1') {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  } else if ($countdownDisplay.textContent === '~Earth Beeeelooowww Us~') {
    clearInterval(intervId);
  }
}

var intervId = setInterval(countdownDisplay, 1000);
