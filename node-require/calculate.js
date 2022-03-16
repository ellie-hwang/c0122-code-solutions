const addObj = require('./add.js');
const subObj = require('./subtract.js');
const multObj = require('./multiply.js');
const divideObj = require('./divide.js');

if (process.argv[3].toLowerCase() === 'plus') {
  console.log(addObj.add(process.argv[2], process.argv[4]));
} else if (process.argv[3].toLowerCase() === 'minus') {
  console.log(subObj.subtract(process.argv[2], process.argv[4]));
} else if (process.argv[3].toLowerCase() === 'times') {
  console.log(multObj.multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3].toLowerCase() === 'over') {
  console.log(divideObj.divide(process.argv[2], process.argv[4]));
} else {
  console.log('Please use "plus", "minus", "times", or "divide"');
}
