const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    trim: true,
  },
  instruction: {
    type: String,
    required: false,
    trim: true,
  },
  reminder: {
    type: String,
    required: false,
    trim: true,
  },
  exercices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercice',
  }],
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    // ref: 'author', CF service Teamy
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'Session', CF service Teamy
    // gives us the dates,
    // gives us the subject
    trim: true,
  },
});

module.exports = mongoose.model('Exam', ExamSchema);
