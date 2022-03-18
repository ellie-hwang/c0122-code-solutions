const JSONdata = require('./data.json');
const fs = require('fs');

module.exports.delete = () => {
  const deleteId = process.argv[3];
  if (!JSONdata.notes[deleteId]) {
    console.log('The note with that ID does NOT exist...');
  } else {
    delete JSONdata.notes[deleteId];
    const updatedJSONdata = JSON.stringify(JSONdata, null, 2);
    fs.writeFile('data.json', updatedJSONdata, 'utf8', err => {
      if (err) throw err;
    });
  }
};
