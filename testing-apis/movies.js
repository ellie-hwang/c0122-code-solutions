function getMovieData() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://betterimdbot.herokuapp.com/swagger.json');
  xhr.setRequestHeader('accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  var param = 'q=q%20-%20twilight';
  xhr.send(param);
}

getMovieData();
