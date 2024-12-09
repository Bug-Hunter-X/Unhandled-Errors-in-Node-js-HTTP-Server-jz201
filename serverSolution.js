const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;

server.on('error', (err) => {
  console.error('Server error:', err);
});

// listen for any errors
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});