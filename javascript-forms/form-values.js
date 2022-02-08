function handleSubmit(event) {
  event.preventDefault();
  var contactFormObj = {};
  var userNameValue = $contactForm.elements.name.value;
  var emailValue = $contactForm.elements.email.value;
  var messageValue = $contactForm.elements.message.value;
  contactFormObj.name = userNameValue;
  contactFormObj.email = emailValue;
  contactFormObj.message = messageValue;
  console.log('contactFormObj: ', contactFormObj);
  $contactForm.reset();
}
var $contactForm = document.getElementById('contact-form');
$contactForm.addEventListener('submit', handleSubmit);
