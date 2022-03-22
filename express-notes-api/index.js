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

// read all entries
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    for (const id in JSONdata.notes) {
      notesArray.push(JSONdata.notes[id]);
    }
    res.json(notesArray);
  });
});

// read single entry by id
app.get('/api/notes/:id', (req, res) => {
  const notesId = req.params.id;
  if (!parseInt(notesId) === true) {
    const errorObj = { error: 'id must be a positive integer' };
    res.status(400).send(errorObj);
  } else if (JSONdata.notes[notesId] !== undefined) {
    res.json(JSONdata.notes[notesId]);
  } else {
    const errorObj = { error: 'cannot find note with id ' + notesId };
    res.status(404).send(errorObj);
  }
});

// create an entry
app.post('/api/notes', (req, res) => {
  const id = JSONdata.nextId;
  if (req.body === {} || req.body.content === undefined || req.body.content === '') {
    const errorObj = { error: 'content is a required field' };
    res.status(400).send(errorObj);
  } else if (req.body.content !== undefined) {
    JSONdata.notes[id] = {
      id: id,
      content: req.body.content
    };
    JSONdata.nextId++;
    const newJSONdata = JSON.stringify(JSONdata, null, 2);
    fs.writeFile('data.json', newJSONdata, 'utf8', err => {
      if (err) {
        console.error(err);
        const errorObj = { error: 'An unexpected error occurred.' };
        res.status(500).send(errorObj);
        process.exit(1);
      }
      res.status(201).send(JSONdata.notes[id]);
    });
  }
});

// delete an entry
app.delete('/api/notes/:id', (req, res) => {
  const notesId = req.params.id;
  if (!parseInt(notesId) === true) {
    const errorObj = { error: 'id must be a positive integer' };
    res.status(400).send(errorObj);
  } else if (JSONdata.notes[notesId] === undefined) {
    const errorObj = { error: 'cannot find note with id ' + notesId };
    res.status(404).send(errorObj);
  } else if (JSONdata.notes[notesId] !== undefined) {
    delete JSONdata.notes[notesId];
    const newJSONdata = JSON.stringify(JSONdata, null, 2);
    fs.writeFile('data.json', newJSONdata, 'utf8', err => {
      if (err) {
        console.error(err);
        const errorObj = { error: 'An unexpected error occurred.' };
        res.status(500).send(errorObj);
        process.exit(1);
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const notesId = req.params.id;
  if (!parseInt(notesId) === true) {
    if (req.body === {} || req.body.content === undefined || req.body.content === '') {
      const errorObj = { error: 'content is a required field' };
      res.status(400).send(errorObj);
    }
    const errorObj = { error: 'id must be a positive integer' };
    res.status(400).send(errorObj);
  } else if (JSONdata.notes[notesId] === undefined) {
    const errorObj = { error: 'cannot find note with id ' + notesId };
    res.status(404).send(errorObj);
  } else if (JSONdata.notes[notesId] !== undefined && req.body.content !== undefined && req.body.content !== {} && req.body.content !== '') {
    JSONdata.notes[notesId].content = req.body.content;
    const newJSONdata = JSON.stringify(JSONdata, null, 2);
    fs.writeFile('data.json', newJSONdata, 'utf8', err => {
      if (err) {
        console.error(err);
        const errorObj = { error: 'An unexpected error occurred.' };
        res.status(500).send(errorObj);
        process.exit(1);
      }
      res.status(200).send(JSONdata.notes[notesId]);
    });
  }
});
