const Exam = require('./model');

module.exports = {
  getAll: async () => Exam.find({})
    .populate({
      path: 'exercices',
      populate: { path: 'questions' },
    }),
  // TODO: handle case not valid ObjectID
  // link: https://stackoverflow.com/questions/17223517/mongoose-casterror-cast-to-objectid-failed-for-value-object-object-at-path
  getById: async id => Exam.findById(id)
    .populate({
      path: 'exercices',
      populate: { path: 'questions' },
    }),
  create: (exam) => {
    const examToSave = new Exam(exam);
    return examToSave.save();
  },
  update: async (_id, exam) => Exam.findOneAndUpdate({ _id }, exam),
};
