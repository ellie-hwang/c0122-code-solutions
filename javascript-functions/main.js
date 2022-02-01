function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

convertMinutesToSeconds(5);

// console.log('value of convertMinutesToSeconds(5): ', fiveMin);

function greet(name) {
  var greeting = 'Hello, ' + name;
  return greeting;
}

greet('Ellie');

// console.log('value of greet(Ellie): ', greetingEllie);

function getArea(width, height) {
  var area = width * height;
  return area;
}

getArea(12, 3);

// console.log('value of getArea(12, 3): ', areaTest);

function getFirstName(person) {
  return person.firstName;
}

var tonyHawk = {
  firstName: 'Tony',
  lastName: 'Hawk'
};

getFirstName(tonyHawk);

// console.log('value of getFirstName(tonyHawk): ', getFirstNameTest);

function getLastElement(array) {
  return array[array.length - 1];
}

var snacks = ['oreos', 'gummies', 'juice', 'apple', 'muffin'];
getLastElement(snacks);

// console.log('value of getLastElement(snacks): ', getLastElementTest);
