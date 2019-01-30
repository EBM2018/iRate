const Exam = require('./model');

module.exports = {
  getAll: async () => Exam.find({}).populate('exercices'),
  getById: async id => Exam.findById(id),
  create: (exam) => {
    const examToSave = new Exam(exam);
    return examToSave.save();
  },
  update: async (_id, exam) => Exam.findOneAndUpdate({ _id }, exam),
};
