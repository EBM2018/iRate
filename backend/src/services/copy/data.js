const Copy = require('./model');

module.exports = {
  getCopiesByExam: async examId => Copy.find({ exam: examId }).populate({ path: 'answers' }),
  create: (copy) => {
    const copyToSave = new Copy(copy);
    return copyToSave.save();
  },
  getById: copyId => Copy.findById(copyId),
  update: async (_id, copy) => Copy.findOneAndUpdate({ _id }, copy),
};
