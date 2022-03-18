const JSONdata = require('./data.json');
const fs = require('fs');
const id = JSONdata.nextId;

module.exports.create = () => {
  JSONdata.notes[id] = process.argv[3];
  JSONdata.nextId++;
  const updatedJSONdata = JSON.stringify(JSONdata, null, 2);
  fs.writeFile('data.json', updatedJSONdata, 'utf8', err => {
    if (err) throw err;
  });
};
