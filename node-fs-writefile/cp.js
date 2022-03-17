const fs = require('fs');

const source = process.argv[2];
const target = process.argv[3];

const content = fs.readFileSync(source, 'utf8');

fs.writeFile(target, `${content}`, 'utf8', err => {
  if (err) throw err;
});
