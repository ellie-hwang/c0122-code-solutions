const express = require('express');
const path = require('path');
const app = express();

const absPath = path.join(__dirname, 'public');
console.log(absPath);

const rootDir = express.static(absPath);

app.use(rootDir);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
