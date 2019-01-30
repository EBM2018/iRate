const Exam = require('./../../services/exam/model');

module.exports = {
  getAll: async () => Exam.find({}),
  create: (exam) => {
    const examToSave = new Exam(exam);
    return examToSave.save();
  },
};
