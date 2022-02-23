var $carouselImg = document.querySelectorAll('.carousel-img');
var $carouselPosition = document.querySelectorAll('.carousel-position');
var $container = document.querySelector('.container');

$container.addEventListener('click', switchImage);
$container.addEventListener('click', switchImageCircles);

var i = 0;

function switchImage(event) {
  if (event.target.getAttribute('class') === 'fa-solid fa-angle-right resize-big') {
    if (i < $carouselImg.length - 1) {
      $carouselImg[i].className = 'carousel-img hidden';
      $carouselImg[i + 1].className = 'carousel-img';
      $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
      $carouselPosition[i + 1].className = 'fa-solid fa-circle carousel-position';
      i++;
    } else if (i === $carouselImg.length - 1) {
      $carouselImg[i].className = 'carousel-img hidden';
      $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
      i = 0;
      $carouselImg[i].className = 'carousel-img';
      $carouselPosition[i].className = 'fa-solid fa-circle carousel-position';
    }
  } else if (event.target.getAttribute('class') === 'fa-solid fa-angle-left resize-big') {
    if (i < $carouselImg.length && i !== 0) {
      $carouselImg[i].className = 'carousel-img hidden';
      $carouselImg[i - 1].className = 'carousel-img';
      $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
      $carouselPosition[i - 1].className = 'fa-solid fa-circle carousel-position';
      i--;
    } else if (i === 0) {
      $carouselImg[i].className = 'carousel-img hidden';
      $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
      i = $carouselImg.length - 1;
      $carouselImg[i].className = 'carousel-img';
      $carouselPosition[i].className = 'fa-solid fa-circle carousel-position';
    }
  }
}

function switchImageCircles(event) {
  if (event.target.getAttribute('class') === 'fa-regular fa-circle carousel-position') {
    for (let j = 0; j < $carouselImg.length; j++) {
      if (event.target.getAttribute('data-entry-id') === $carouselImg[j].getAttribute('data-entry-id')) {
        $carouselImg[i].className = 'carousel-img hidden';
        $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
        $carouselImg[j].className = 'carousel-img';
        $carouselPosition[j].className = 'fa-solid fa-circle carousel-position';
        i = j;
      }
    }
  }
}

function autoSwitchImage() {
  if (i < $carouselImg.length - 1) {
    $carouselImg[i].className = 'carousel-img hidden';
    $carouselImg[i + 1].className = 'carousel-img';
    $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
    $carouselPosition[i + 1].className = 'fa-solid fa-circle carousel-position';
    i++;
  } else if (i === $carouselImg.length - 1) {
    $carouselImg[i].className = 'carousel-img hidden';
    $carouselPosition[i].className = 'fa-regular fa-circle carousel-position';
    i = 0;
    $carouselImg[i].className = 'carousel-img';
    $carouselPosition[i].className = 'fa-solid fa-circle carousel-position';
  }
}

setInterval(autoSwitchImage, 3000);
