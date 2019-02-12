const cors = require('cors');
const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

const config = require('./config');

require('./config/mongoose');

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.use('/api', require('./api'));

app.use((err, req, res) => {
  // Log error message in our server's console
  console.error(err.message);
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send(err.message);
});

app.use(serveStatic('./public'));

server.listen(config.app.port, (err) => {
  if (err) console.error(err);
  else console.log(`Listening on port ${config.app.port}`);
});
