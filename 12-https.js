const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page bro zz");
  }
  if (req.url === "/about") {
    res.end("here is our about");
  }
  res.end(`<h1>oops! 404 not found</h1>
  <a href="/">back home</a>
  `);
});

server.listen(3000);
