const express = require('express');
const app = express();
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const jsonParse = express.json();

app.use('/api/grades', jsonParse);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select  "gradeId",
            "name",
            "course",
            "score",
            "createdAt"
      from  "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (req.body === {}) {
    res.status(400).json({
      error: 'Please put a \'name\', \'course\', and \'score\''
    });
    return;
  } else if (name === undefined || name === '') {
    res.status(400).json({
      error: '\'name\' is required field'
    });
    return;
  } else if (course === undefined || course === '') {
    res.status(400).json({
      error: '\'course\' is required field'
    });
    return;
  } else if (score === undefined || score === '') {
    res.status(400).json({
      error: '\'score\' is required field'
    });
    return;
  } else if (!Number.isInteger(score) || score < 0) {
    res.status(400).json({
      error: '\'score\' must be 0 or a positive integer'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '\'gradeId\' must be a positive integer.'
    });
    return;
  } else if (req.body === {}) {
    res.status(400).json({
      error: 'Please put a \'name\', \'course\', and \'score\'.'
    });
    return;
  } else if (name === undefined || name === '') {
    res.status(400).json({
      error: '\'name\' is a required field.'
    });
    return;
  } else if (course === undefined || course === '') {
    res.status(400).json({
      error: '\'course\' is a required field.'
    });
    return;
  } else if (score === undefined || score === '') {
    res.status(400).json({
      error: '\'score\' is a required field.'
    });
    return;
  } else if (!Number.isInteger(score) || score < 0) {
    res.status(400).json({
      error: '\'score\' must be 0 or a positive integer.'
    });
    return;
  }

  const sql = `
    update "grades"
    set "name"    = $1,
        "course"  = $2,
        "score"   = $3
    where "gradeId" = $4
    returning *
  `;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Cannot find grade with \'gradeId\' ' + gradeId
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '\'gradeId\' must be a positive integer.'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Cannot find grade with \'gradeId\' ' + gradeId
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});
