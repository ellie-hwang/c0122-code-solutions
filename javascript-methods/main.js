var a = 4;
var b = 8;
var c = 12;

var maximumValue = Math.max(a, b, c);
console.log('value of maximumValue: ', maximumValue);

var heroes = ['Squirrel Girl', 'Spiderman', 'Mermaid Man', 'Barnacle Boy'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero: ', randomHero);

var library = [
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'JK Rowling'
  },
  {
    title: 'It',
    author: 'Stephen King'
  }
];

var lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library array: ', library);

var fullName = 'Ellie Hwang';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
