const express = require('express');
const app = express();
const JSONdata = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

const jsonParse = express.json();

app.use('/api/notes', jsonParse);

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

app.get('/api/notes/:id', (req, res) => {
  const notes = JSONdata.notes;
  const notesId = req.params.id;
  if (!parseInt(notesId) === true) {
    const errorObj = { error: 'id must be a positive integer' };
    res.status(400).send(errorObj);
  } else if (notes[notesId] !== undefined) {
    res.json(notes[notesId]);
  } else {
    const errorObj = { error: 'cannot find note with id ' + notesId };
    res.status(404).send(errorObj);
  }
});
