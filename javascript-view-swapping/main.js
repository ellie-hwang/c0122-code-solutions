var $tabEl = document.querySelectorAll('.tab');
var $viewEl = document.querySelectorAll('.view');
var $tabContainerEl = document.querySelector('.tab-container');
$tabContainerEl.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabEl.length; i++) {
      if (event.target === $tabEl[i]) {
        event.target.className = 'tab active';
      } else {
        $tabEl[i].className = 'tab';
      }
    }
  }
  if (event.target.getAttribute('class') === 'tab active') {
    var $dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewEl.length; i++) {
      if ($dataView === $viewEl[i].getAttribute('data-view')) {
        $viewEl[i].className = 'view';
      } else {
        $viewEl[i].className = 'view hidden';
      }
    }
  }
}
