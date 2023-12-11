const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello World 2!\n'
  const message = process.env.NODE_ENV === 'preview' ? 'Hello World Preview' : 'Hello World Active';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
