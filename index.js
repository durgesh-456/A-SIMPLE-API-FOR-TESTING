const http = require('http');
const data = require('./data')
http.createServer((req, resp) => {
    console.log("Received a request");
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
  }).listen(4500, () => {
    console.log("Server running on port 4500");
  });