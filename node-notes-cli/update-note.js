const JSONdata = require('./data.json');
const fs = require('fs');

module.exports.update = () => {
  const updateId = process.argv[3];
  const updatedNote = process.argv[4];
  if (!JSONdata.notes[updateId]) {
    console.log('The note with that ID does NOT exist...');
  } else {
    JSONdata.notes[updateId] = updatedNote;
    const updatedJSONdata = JSON.stringify(JSONdata, null, 2);
    fs.writeFile('data.json', updatedJSONdata, 'utf8', err => {
      if (err) throw err;
    });
  }
};
