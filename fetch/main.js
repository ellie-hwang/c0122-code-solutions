fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json())
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error('Error:', error);
  });

fetch('https://pokeapi.co/api/v2/pokemon/1', {
  method: 'GET'
})
  .then(response => response.json())
  .then(bulbasaur => {
    console.log(bulbasaur);
  })
  .catch(error => {
    console.error('Error:', error);
  });
