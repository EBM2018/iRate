const mongoose = require('mongoose');

const ExerciceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    default: 0,
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
