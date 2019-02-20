const cors = require('cors');
const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = require('http').Server(app);

const config = require('./config');
// setup database connexion
require('./config/mongoose');

app.use(bodyParser.json());

// Enable CORS
// TODO: implement corsoptions to secure the app
app.use(cors());

app.use('/api', require('./api'));

// Disable ESLint for this line because of the issue listed here :
// https://github.com/expressjs/generator/issues/78
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
