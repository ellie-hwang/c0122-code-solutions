const express = require('express');
const app = express();
const JSONdata = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/notes', (req, res) => {
  const gradesArray = [];
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const notes = JSONdata.notes;
    for (const id in notes) {
      gradesArray.push(notes[id]);
    }
    res.json(gradesArray);
  });
});
