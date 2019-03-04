const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    default: 0,
  },
  scale: {
    type: Number,
    required: true,
    trim: true,
  },
  estimatedTime: {
    type: Number,
    required: false,
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
