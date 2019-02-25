const Exam = require('./model');

module.exports = {
  getAll: async () => Exam.find({})
    .populate({
      path: 'exercices',
      populate: { path: 'questions' },
    }),
  getById: async id => Exam.findById(id)
    .populate({
      path: 'exercices',
      options: {
        sort: { order: +1 },
      },
      populate: {
        path: 'questions',
        options: {
          sort: { order: +1 },
        },
      },
    }),
  create: (exam) => {
    const examToSave = new Exam(exam);
    return examToSave.save();
  },
  update: async (_id, exam) => Exam.findOneAndUpdate({ _id }, exam),
};
