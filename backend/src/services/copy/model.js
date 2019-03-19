const mongoose = require('mongoose');

const CopySchema = new mongoose.Schema({
  submissionTime: {
    type: Date
  },
  exam: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam'
  }],
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer'
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId
  },
  creationTime: {
    type: Date,
    default: () => Date.now()
  },
});

module.exports = mongoose.model('Copy', CopySchema);
