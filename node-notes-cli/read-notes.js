const JSONdata = require('./data.json');
const fs = require('fs');

module.exports.readNotes = function readNotes() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSONdata.notes;
    for (const id in notes) {
      console.log(`${id}: ${notes[id]}`);
    }
  });

};
