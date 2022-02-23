var $message = document.querySelector('.message');

function displayMessage() {
  $message.textContent = 'Hello There';
}

setTimeout(displayMessage, 2000);
