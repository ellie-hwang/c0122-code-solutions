/* pseudocode
function: To display the number of clicks and to update the css
class selector for the button according to the number of clicks
input: clicking (event)
output: click number (text content) and button appearance (class)
-create storage for the number of clicks
-create storage for the button element node
-create storage for the paragraph element node
-each time the button is clicked (event), increment the number of
clicks by one
-change the text in the paragraph to reflect the count number
-If the count is less than 4, update the classes for the button
element
-If the count is less than 7, update the classes for the button
element
-If the count is less than 10, update the classes for the button
element
-If the count is less than 13, update the classes for the button
element
-If the count is less than 16, update the classes for the button
element
*/

var counter = 0;
var $button = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

function clickCount(event) {
  counter++;
  $clickcount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    $button.className = 'hot-button cold';
  } else if (counter < 7) {
    $button.className = 'hot-button cool';
  } else if (counter < 10) {
    $button.className = 'hot-button tepid';
  } else if (counter < 13) {
    $button.className = 'hot-button warm';
  } else if (counter < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
}

$button.addEventListener('click', clickCount);
