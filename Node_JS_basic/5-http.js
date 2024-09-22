const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents('database.csv');
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
