const fs = require('fs');

const userInput = process.argv[2];

fs.writeFile('note.txt', `${userInput}\n`, 'utf8', err => {
  if (err) throw err;
});
