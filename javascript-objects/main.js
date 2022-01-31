var student = {
  firstName: 'Mike',
  lastName: 'Wazowski',
  age: 150
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Professional Scarer';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'Rav4',
  year: 2018
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('value of vehicle[\'color\'] :', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']: ', vehicle['isConvertible']);

console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Ketchup',
  type: 'Fish'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
