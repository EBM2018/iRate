const Exam = require('./model');

module.exports = {
  getAll: async () => Exam.find({})
    .populate({
      path: 'exercices',
      populate: { path: 'questions' },
    }),
  getById: async id => Exam.findById(id),
  create: (exam) => {
    const examToSave = new Exam(exam);
    return examToSave.save();
  },
};
