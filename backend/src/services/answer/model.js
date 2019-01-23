const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  content: {
    type: String,
    required: false,
    trim: true,
  },
  refQuestion: {
    type: mongoose.Schema.ObjectId,
    required: true,
    trim: true,
  },
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
  mark: {
    type: Number,
    default: 0,
  },
  feedbacks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedback',
  }],
});

module.exports = mongoose.model('Answer', AnswerSchema);
