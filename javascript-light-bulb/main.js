var $room = document.querySelector('.container');
var $button = document.querySelector('button');
var $switch = false;

function lightSwitch(event) {
  if ($switch === false) {
    $button.className = 'light-bulb-on';
    $room.className = 'container room-on';
    $switch = !$switch;
  } else {
    $button.className = 'light-bulb-off';
    $room.className = 'container room-off';
    $switch = !$switch;
  }
}

$button.addEventListener('click', lightSwitch);
