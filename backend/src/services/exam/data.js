const Exam = require('./../../services/exam/model');

module.exports = {
  getExams: async () => Exam.find({}),
  // getExams: async () => [{ exam: 'exam' },
  //   { exam: 'exam' }],
  create: (exam) => {
    const examToSave = new Exam(exam);
    return examToSave.save();
  },
};
