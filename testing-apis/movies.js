function getMovieData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://betterimdbot.herokuapp.com/swagger.json');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getMovieData();
