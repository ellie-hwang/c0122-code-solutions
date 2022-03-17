// const JSONdata = require('./data.json');
const read = require('./read-notes.js');
const userInput = process.argv[2];

if (userInput.toLowerCase() === 'read') {
  read.readNotes();
}
