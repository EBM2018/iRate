const mongoose = require('mongoose');

const ExerciceSchema = new mongoose.Schema({
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
    ref: 'Question',
  }],
  creationTime: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model('Exercice', ExerciceSchema);
