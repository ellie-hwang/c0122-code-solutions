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
      error: 'Please put a name, course, and score'
    });
    return;
  } else if (name === undefined || name === '') {
    res.status(400).json({
      error: 'name is required field'
    });
    return;
  } else if (course === undefined || course === '') {
    res.status(400).json({
      error: 'course is required field'
    });
    return;
  } else if (score === undefined || score === '') {
    res.status(400).json({
      error: 'score is required field'
    });
    return;
  } else if (!Number.isInteger(score) || score < 0) {
    res.status(400).json({
      error: 'score must be 0 or a positive integer'
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

// app.put('api/grades/:gradeId', (res, req, next) => {
//   const name = req.body.name;
//   const course = req.body.course;
//   const score = Number(req.body.score);
// });
