const takeAChance = require('./take-a-chance');

const promiseEllie = takeAChance('Ellie');

promiseEllie.then(value => {
  console.log(value);
});

promiseEllie.catch(error => {
  console.log(error.message);
});
