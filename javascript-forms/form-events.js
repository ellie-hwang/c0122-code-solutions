function handleFocus(event) {
  console.log('Focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur eventinpu fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('Input event fired');
  console.log(event.target.name);
  console.log(event.target.value);
}

var $userName = document.querySelector('input[name= "name"]');
var $email = document.querySelector('input[name="email"]');
var $message = document.querySelector('textarea[name="message"]');
// var $message = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
