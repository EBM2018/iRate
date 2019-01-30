const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  scale: {
    type: Number,
    required: true,
    trim: true,
  },
  correction: {
    type: String,
    trim: true,
  },
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
