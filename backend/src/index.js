// const path = require('path');

const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').Server(app);

const config = require('./config');

// setup database connexion
require('./config/mongoose');


app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.use((err, req, res) => {
  console.error(err.message); // Log error message in our server's console
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send(err.message);
});

app.use(serveStatic('./public'));

/* app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

server.listen(config.app.port, (err) => {
  if (err) console.error(err);
  else console.log(`Listening on port ${config.app.port}`);
});
