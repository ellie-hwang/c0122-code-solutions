// const JSONdata = require('./data.json');
const readObj = require('./read-notes.js');
const createObj = require('./create-note.js');
const deleteObj = require('./delete-note.js');
const updateObj = require('./update-note.js');
const userInput = process.argv[2];

if (userInput.toLowerCase() === 'read') {
  readObj.read();
} else if (userInput.toLowerCase() === 'create') {
  createObj.create();
} else if (userInput.toLowerCase() === 'delete') {
  deleteObj.delete();
} else if (userInput.toLowerCase() === 'update') {
  updateObj.update();
} else {
  console.log('Please use "read", "create", "delete", or "update"...');
}
