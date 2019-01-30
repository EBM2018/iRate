const mongoose = require('mongoose');

const config = require('./index');

mongoose.connect(config.mongodb.uri);
