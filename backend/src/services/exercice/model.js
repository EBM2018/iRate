const mongoose = require('mongoose');

const ExerciceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  estimatedTime: {
    type: Number,
    required: false,
    trim: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionDisplayer',
  }],
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('ExerciceDisplayer', ExerciceSchema);
