// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

//json parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const UserRouter = require('./routes/User');
const BookRouter = require('./routes/Book');
const HighRouter = require('./routes/Highlight');

app.use('/api/users', UserRouter);
app.use('/api/books', BookRouter);
app.use('/api/highlights', HighRouter);
// const hostname = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(5000, function(){
  console.log(`app.js is running on port ${5000}`)
})