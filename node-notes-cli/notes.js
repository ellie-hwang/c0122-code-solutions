// const JSONdata = require('./data.json');
const readObj = require('./read-notes.js');
const createObj = require('./create-note.js');
const userInput = process.argv[2];

if (userInput.toLowerCase() === 'read') {
  readObj.read();
} else if (userInput.toLowerCase() === 'create') {
  createObj.create();
}
