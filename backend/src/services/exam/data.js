const Exam = require('./model');

module.exports = {
  getAll: async (queryParams = {}) => {
    const query = queryParams && { ...queryParams };
    // TODO: validate the parameters if needed??
    return Exam.find(query || '')
      .populate({
        path: 'exercices',
        populate: { path: 'questions' },
      });
  },
  // TODO: handle case not valid ObjectID
  // link: https://stackoverflow.com/questions/17223517/mongoose-casterror-cast-to-objectid-failed-for-value-object-object-at-path
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
