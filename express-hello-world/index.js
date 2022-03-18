const express = require('express');
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log('req.method: ', req.method);
  res.send('<p>Let\'s hope this works...</p>');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
