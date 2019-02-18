const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  estimatedTime: {
    type: Number,
    required: false,
    trim: true,
  },
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
  questionRef: {
    type: mongoose.Schema.ObjectId,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
