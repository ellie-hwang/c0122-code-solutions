var $modalButton = document.querySelector('.modal-button');
var $noButton = document.querySelector('.no-button');
var $blackBg = document.querySelector('.black-bg');

$modalButton.addEventListener('click', openSurvey);
$noButton.addEventListener('click', closeSurvey);

function openSurvey(event) {
  $blackBg.className = 'black-bg';
}

function closeSurvey(event) {
  $blackBg.className = 'black-bg display-hidden';
}
