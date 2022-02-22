function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

var someObj = new ExampleConstructor();
console.log('value of someObj:', someObj);

var instanceOf = someObj instanceof ExampleConstructor;
console.log('value of instanceOf:', instanceOf);
