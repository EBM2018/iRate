const mongoose = require('mongoose');

const CopySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  submissionTime: {
    type: Date,
    default: () => Date.now(),
  },
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer',
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
  },
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('Copy', CopySchema);